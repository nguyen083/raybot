package model

import (
	"encoding/json"
	"fmt"
	"time"
)

// CommandType represents the type of command
type CommandType uint16

func (s CommandType) Validate() error {
	switch s {
	case CommandTypeMoveToLocation, CommandTypeLiftBox, CommandTypeDropBox:
		return nil
	default:
		return fmt.Errorf("invalid command type: %d", s)
	}
}

func (s CommandType) String() string {
	return []string{
		"MOVE_TO_LOCATION",
		"LIFT_BOX",
		"DROP_BOX",
	}[s]
}

const (
	CommandTypeMoveToLocation CommandType = iota
	CommandTypeLiftBox
	CommandTypeDropBox
)

// CommandStatus represents the status of the command
type CommandStatus uint8

func (s CommandStatus) Validate() error {
	if s < CommandStatusInProgress || s > CommandStatusFailed {
		return fmt.Errorf("invalid command status: %d", s)
	}
	return nil
}

func (s CommandStatus) String() string {
	return []string{
		"IN_PROGRESS",
		"SUCCEEDED",
		"FAILED",
	}[s]
}

const (
	CommandStatusInProgress CommandStatus = iota
	CommandStatusSucceeded
	CommandStatusFailed
)

// CommandSource represents where the command originated from
type CommandSource uint8

const (
	CommandSourceManual CommandSource = iota
	CommandSourceCloud
)

func (s CommandSource) Validate() error {
	switch s {
	case CommandSourceManual, CommandSourceCloud:
		return nil
	default:
		return fmt.Errorf("invalid command source: %d", s)
	}
}

func (s CommandSource) String() string {
	return []string{
		"MANUAL",
		"CLOUD",
	}[s]
}

// Command represents a robot command
type Command struct {
	ID          string
	Type        CommandType
	Status      CommandStatus
	Source      CommandSource
	Inputs      CommandInputs
	Error       *string
	CreatedAt   time.Time
	CompletedAt *time.Time
}

// CommandData represents the data of the command
type CommandInputs interface {
	isCommandInputs()
}

type CommandMoveToLocationInputs struct {
	Location string `json:"location" validate:"required"`
}

func (CommandMoveToLocationInputs) isCommandInputs() {}

type CommandLiftBoxInputs struct{}

func (CommandLiftBoxInputs) isCommandInputs() {}

type CommandDropBoxInputs struct{}

func (CommandDropBoxInputs) isCommandInputs() {}

type EmptyCommandInputs struct{}

func (EmptyCommandInputs) isCommandInputs() {}

func UnmarshalCommandInputs(cmdType CommandType, data []byte) (CommandInputs, error) {
	var inputs CommandInputs

	switch cmdType {
	case CommandTypeMoveToLocation:
		var moveToLocationInputs CommandMoveToLocationInputs
		if err := json.Unmarshal(data, &moveToLocationInputs); err != nil {
			return nil, fmt.Errorf("unmarshal move to location inputs: %w", err)
		}
		inputs = moveToLocationInputs
	case CommandTypeLiftBox:
		inputs = EmptyCommandInputs{}
	case CommandTypeDropBox:
		inputs = EmptyCommandInputs{}
	default:
		return nil, fmt.Errorf("invalid command type: %d", cmdType)
	}

	return inputs, nil
}
