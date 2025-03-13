// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: robot_state.sql

package sqlc

import (
	"context"
)

const batteryStateUpdate = `-- name: BatteryStateUpdate :exec
UPDATE robot_state SET battery_state = ?
`

func (q *Queries) BatteryStateUpdate(ctx context.Context, db DBTX, batteryState string) error {
	_, err := db.ExecContext(ctx, batteryStateUpdate, batteryState)
	return err
}

const chargeStateUpdate = `-- name: ChargeStateUpdate :exec
UPDATE robot_state SET charge_state = ?
`

func (q *Queries) ChargeStateUpdate(ctx context.Context, db DBTX, chargeState string) error {
	_, err := db.ExecContext(ctx, chargeStateUpdate, chargeState)
	return err
}

const dischargeStateUpdate = `-- name: DischargeStateUpdate :exec
UPDATE robot_state SET discharge_state = ?
`

func (q *Queries) DischargeStateUpdate(ctx context.Context, db DBTX, dischargeState string) error {
	_, err := db.ExecContext(ctx, dischargeStateUpdate, dischargeState)
	return err
}

const distanceSensorStateUpdate = `-- name: DistanceSensorStateUpdate :exec
UPDATE robot_state SET distance_sensor_state = ?
`

func (q *Queries) DistanceSensorStateUpdate(ctx context.Context, db DBTX, distanceSensorState string) error {
	_, err := db.ExecContext(ctx, distanceSensorStateUpdate, distanceSensorState)
	return err
}

const driveMotorStateUpdate = `-- name: DriveMotorStateUpdate :exec
UPDATE robot_state SET drive_motor_state = ?
`

func (q *Queries) DriveMotorStateUpdate(ctx context.Context, db DBTX, driveMotorState string) error {
	_, err := db.ExecContext(ctx, driveMotorStateUpdate, driveMotorState)
	return err
}

const liftMotorStateUpdate = `-- name: LiftMotorStateUpdate :exec
UPDATE robot_state SET lift_motor_state = ?
`

func (q *Queries) LiftMotorStateUpdate(ctx context.Context, db DBTX, liftMotorState string) error {
	_, err := db.ExecContext(ctx, liftMotorStateUpdate, liftMotorState)
	return err
}

const robotStateGet = `-- name: RobotStateGet :one
SELECT battery_state, charge_state, discharge_state, distance_sensor_state, lift_motor_state, drive_motor_state FROM robot_state LIMIT 1
`

func (q *Queries) RobotStateGet(ctx context.Context, db DBTX) (RobotState, error) {
	row := db.QueryRowContext(ctx, robotStateGet)
	var i RobotState
	err := row.Scan(
		&i.BatteryState,
		&i.ChargeState,
		&i.DischargeState,
		&i.DistanceSensorState,
		&i.LiftMotorState,
		&i.DriveMotorState,
	)
	return i, err
}

const robotStateUpdate = `-- name: RobotStateUpdate :exec
UPDATE robot_state
SET
	battery_state = ?,
	charge_state = ?,
	discharge_state = ?,
	distance_sensor_state = ?,
	lift_motor_state = ?,
	drive_motor_state = ?
`

type RobotStateUpdateParams struct {
	BatteryState        string `json:"battery_state"`
	ChargeState         string `json:"charge_state"`
	DischargeState      string `json:"discharge_state"`
	DistanceSensorState string `json:"distance_sensor_state"`
	LiftMotorState      string `json:"lift_motor_state"`
	DriveMotorState     string `json:"drive_motor_state"`
}

func (q *Queries) RobotStateUpdate(ctx context.Context, db DBTX, arg RobotStateUpdateParams) error {
	_, err := db.ExecContext(ctx, robotStateUpdate,
		arg.BatteryState,
		arg.ChargeState,
		arg.DischargeState,
		arg.DistanceSensorState,
		arg.LiftMotorState,
		arg.DriveMotorState,
	)
	return err
}
