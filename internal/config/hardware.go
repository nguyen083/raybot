package config

import (
	"fmt"
	"strings"
	"time"
)

type Hardware struct {
	ESP ESP `yaml:"esp"`
	PIC PIC `yaml:"pic"`
}

func (h *Hardware) Validate() error {
	if err := h.ESP.Validate(); err != nil {
		return fmt.Errorf("validate esp: %w", err)
	}

	if err := h.PIC.Validate(); err != nil {
		return fmt.Errorf("validate pic: %w", err)
	}

	if h.ESP.Serial.Port == h.PIC.Serial.Port {
		return fmt.Errorf("esp and pic serial ports cannot be the same")
	}

	return nil
}

type ESP struct {
	Serial Serial `yaml:"serial"`
}

func (e ESP) Validate() error {
	if err := e.Serial.Validate(); err != nil {
		return fmt.Errorf("validate esp serial: %w", err)
	}

	return nil
}

type PIC struct {
	Serial Serial `yaml:"serial"`
}

func (p PIC) Validate() error {
	if err := p.Serial.Validate(); err != nil {
		return fmt.Errorf("validate pic serial: %w", err)
	}

	return nil
}

type Serial struct {
	Port        string        `yaml:"port"`
	BaudRate    int           `yaml:"baud_rate"`
	DataBits    DataBits      `yaml:"data_bits"`
	StopBits    StopBits      `yaml:"stop_bits"`
	Parity      Parity        `yaml:"parity"`
	ReadTimeout time.Duration `yaml:"read_timeout"`
}

func (s Serial) Validate() error {
	if s.Port == "" {
		return fmt.Errorf("port is required")
	}

	if s.BaudRate < 1200 || s.BaudRate > 115200 {
		return fmt.Errorf("invalid baud rate: %d", s.BaudRate)
	}

	return nil
}

type DataBits int

func (d DataBits) Int() int {
	return int(d)
}

const (
	SerialDataBits5 DataBits = iota + 5
	SerialDataBits6
	SerialDataBits7
	SerialDataBits8
)

// UnmarshalText implements [encoding.TextUnmarshaler].
func (d *DataBits) UnmarshalText(text []byte) error {
	switch strings.ToLower(string(text)) {
	case "5":
		*d = SerialDataBits5
	case "6":
		*d = SerialDataBits6
	case "7":
		*d = SerialDataBits7
	case "8":
		*d = SerialDataBits8
	default:
		return fmt.Errorf("invalid data bits: %s", text)
	}
	return nil
}

type StopBits int

// UnmarshalText implements [encoding.TextUnmarshaler].
func (s *StopBits) UnmarshalText(text []byte) error {
	switch strings.ToLower(string(text)) {
	case "1":
		*s = SerialStopBitsOne
	case "1.5":
		*s = SerialStopBitsOnePointFive
	case "2":
		*s = SerialStopBitsTwo
	default:
		return fmt.Errorf("invalid stop bits: %s", text)
	}
	return nil
}

const (
	SerialStopBitsOne StopBits = iota
	SerialStopBitsOnePointFive
	SerialStopBitsTwo
)

type Parity string

// UnmarshalText implements [encoding.TextUnmarshaler].
func (p *Parity) UnmarshalText(text []byte) error {
	switch strings.ToLower(string(text)) {
	case "none":
		*p = SerialParityNone
	case "odd":
		*p = SerialParityOdd
	case "even":
		*p = SerialParityEven
	default:
		return fmt.Errorf("invalid parity: %s", text)
	}
	return nil
}

const (
	SerialParityNone Parity = "none"
	SerialParityOdd  Parity = "odd"
	SerialParityEven Parity = "even"
)
