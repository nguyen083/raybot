// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: drive_motor.sql

package sqlc

import (
	"context"
)

const driveMotorGet = `-- name: DriveMotorGet :one
SELECT id, direction, speed, is_running, enabled, updated_at FROM drive_motor
`

func (q *Queries) DriveMotorGet(ctx context.Context, db DBTX) (DriveMotor, error) {
	row := db.QueryRowContext(ctx, driveMotorGet)
	var i DriveMotor
	err := row.Scan(
		&i.ID,
		&i.Direction,
		&i.Speed,
		&i.IsRunning,
		&i.Enabled,
		&i.UpdatedAt,
	)
	return i, err
}

const driveMotorUpdate = `-- name: DriveMotorUpdate :exec
UPDATE drive_motor
SET
	direction = ?,
	speed = ?,
	is_running = ?,
	enabled = ?,
	updated_at = ?
WHERE id = 1
`

type DriveMotorUpdateParams struct {
	Direction int64  `json:"direction"`
	Speed     int64  `json:"speed"`
	IsRunning int64  `json:"is_running"`
	Enabled   int64  `json:"enabled"`
	UpdatedAt string `json:"updated_at"`
}

func (q *Queries) DriveMotorUpdate(ctx context.Context, db DBTX, arg DriveMotorUpdateParams) error {
	_, err := db.ExecContext(ctx, driveMotorUpdate,
		arg.Direction,
		arg.Speed,
		arg.IsRunning,
		arg.Enabled,
		arg.UpdatedAt,
	)
	return err
}
