package http

import (
	"context"
	"fmt"
	"time"

	"github.com/tbe-team/raybot/internal/handlers/http/gen"
	"github.com/tbe-team/raybot/internal/services/dashboarddata"
)

type dashboardDataHandler struct {
	dashboardDataService dashboarddata.Service
}

func newDashboardDataHandler(dashboardDataService dashboarddata.Service) *dashboardDataHandler {
	return &dashboardDataHandler{
		dashboardDataService: dashboardDataService,
	}
}

func (h dashboardDataHandler) GetRobotState(ctx context.Context, _ gen.GetRobotStateRequestObject) (gen.GetRobotStateResponseObject, error) {
	state, err := h.dashboardDataService.GetRobotState(ctx)
	if err != nil {
		return nil, fmt.Errorf("dashboard data service get robot state: %w", err)
	}

	return gen.GetRobotState200JSONResponse(h.convertRobotStateToResponse(state)), nil
}

func (h dashboardDataHandler) convertRobotStateToResponse(state dashboarddata.RobotState) gen.RobotStateResponse {
	return gen.RobotStateResponse{
		Battery: gen.BatteryState{
			Current:      state.Battery.Current,
			Temp:         state.Battery.Temp,
			Voltage:      state.Battery.Voltage,
			Percent:      state.Battery.Percent,
			Fault:        state.Battery.Fault,
			CellVoltages: state.Battery.CellVoltages,
			Health:       state.Battery.Health,
		},
		Charge: gen.ChargeState{
			CurrentLimit: state.BatteryCharge.CurrentLimit,
			Enabled:      state.BatteryCharge.Enabled,
			UpdatedAt:    state.BatteryCharge.UpdatedAt,
		},
		Discharge: gen.DischargeState{
			CurrentLimit: state.BatteryDischarge.CurrentLimit,
			Enabled:      state.BatteryDischarge.Enabled,
			UpdatedAt:    state.BatteryDischarge.UpdatedAt,
		},
		DistanceSensor: gen.DistanceSensorState{
			FrontDistance: state.DistanceSensor.FrontDistance,
			BackDistance:  state.DistanceSensor.BackDistance,
			DownDistance:  state.DistanceSensor.DownDistance,
			UpdatedAt:     state.DistanceSensor.UpdatedAt,
		},
		LiftMotor: gen.LiftMotorState{
			CurrentPosition: state.LiftMotor.CurrentPosition,
			TargetPosition:  state.LiftMotor.TargetPosition,
			IsRunning:       state.LiftMotor.IsRunning,
			Enabled:         state.LiftMotor.Enabled,
			UpdatedAt:       state.LiftMotor.UpdatedAt,
		},
		DriveMotor: gen.DriveMotorState{
			Direction: state.DriveMotor.Direction.String(),
			Speed:     state.DriveMotor.Speed,
			IsRunning: state.DriveMotor.IsRunning,
			Enabled:   state.DriveMotor.Enabled,
			UpdatedAt: state.DriveMotor.UpdatedAt,
		},
		Location: gen.LocationState{
			CurrentLocation: state.Location.CurrentLocation,
			UpdatedAt:       state.Location.UpdatedAt,
		},
		Cargo: gen.CargoState{
			IsOpen:         state.Cargo.IsOpen,
			QrCode:         state.Cargo.QRCode,
			BottomDistance: state.Cargo.BottomDistance,
			UpdatedAt:      state.Cargo.UpdatedAt,
		},
		CargoDoorMotor: gen.CargoDoorMotorState{
			Direction: state.CargoDoorMotor.Direction.String(),
			Speed:     state.CargoDoorMotor.Speed,
			IsRunning: state.CargoDoorMotor.IsRunning,
			Enabled:   state.CargoDoorMotor.Enabled,
			UpdatedAt: state.CargoDoorMotor.UpdatedAt,
		},
		AppConnection: gen.AppConnection{
			CloudConnection: gen.CloudConnection{
				Connected:       state.AppConnection.CloudConnection.Connected,
				LastConnectedAt: state.AppConnection.CloudConnection.LastConnectedAt,
				Uptime:          h.getUptime(state.AppConnection.CloudConnection.Connected, state.AppConnection.CloudConnection.LastConnectedAt),
				Error:           state.AppConnection.CloudConnection.Error,
			},
			EspSerialConnection: gen.ESPSerialConnection{
				Connected:       state.AppConnection.ESPSerialConnection.Connected,
				LastConnectedAt: state.AppConnection.ESPSerialConnection.LastConnectedAt,
				Error:           state.AppConnection.ESPSerialConnection.Error,
			},
			PicSerialConnection: gen.PICSerialConnection{
				Connected:       state.AppConnection.PICSerialConnection.Connected,
				LastConnectedAt: state.AppConnection.PICSerialConnection.LastConnectedAt,
				Error:           state.AppConnection.PICSerialConnection.Error,
			},
			RfidUsbConnection: gen.RFIDUSBConnection{
				Connected:       state.AppConnection.RFIDUSBConnection.Connected,
				LastConnectedAt: state.AppConnection.RFIDUSBConnection.LastConnectedAt,
				Error:           state.AppConnection.RFIDUSBConnection.Error,
			},
		},
	}
}

func (dashboardDataHandler) getUptime(connected bool, lastConnectedAt *time.Time) float32 {
	if !connected {
		return 0
	}
	if lastConnectedAt == nil {
		return 0
	}
	return float32(time.Since(*lastConnectedAt).Seconds())
}
