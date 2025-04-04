package cargoimpl

import (
	"context"
	"fmt"
	"time"

	"github.com/tbe-team/raybot/internal/services/cargo"
	"github.com/tbe-team/raybot/internal/storage/db"
	"github.com/tbe-team/raybot/internal/storage/db/sqlc"
)

type cargoRepository struct {
	db      db.DB
	queries *sqlc.Queries
}

func NewCargoRepository(db db.DB, queries *sqlc.Queries) cargo.Repository {
	return &cargoRepository{
		db:      db,
		queries: queries,
	}
}

func (r *cargoRepository) UpdateCargoDoor(ctx context.Context, params cargo.UpdateCargoDoorParams) error {
	if _, err := r.queries.CargoUpdateIsOpen(ctx, r.db, sqlc.CargoUpdateIsOpenParams{
		IsOpen:    boolToInt64(params.IsOpen),
		UpdatedAt: time.Now().Format(time.RFC3339),
	}); err != nil {
		return fmt.Errorf("failed to update cargo door: %w", err)
	}

	return nil
}

func (r *cargoRepository) UpdateCargoQRCode(ctx context.Context, params cargo.UpdateCargoQRCodeParams) error {
	if _, err := r.queries.CargoUpdateQRCode(ctx, r.db, sqlc.CargoUpdateQRCodeParams{
		QrCode:    params.QRCode,
		UpdatedAt: time.Now().Format(time.RFC3339),
	}); err != nil {
		return fmt.Errorf("failed to update cargo qr code: %w", err)
	}

	return nil
}

func (r *cargoRepository) UpdateCargoBottomDistance(ctx context.Context, params cargo.UpdateCargoBottomDistanceParams) error {
	if _, err := r.queries.CargoUpdateBottomDistance(ctx, r.db, sqlc.CargoUpdateBottomDistanceParams{
		BottomDistance: int64(params.BottomDistance),
		UpdatedAt:      time.Now().Format(time.RFC3339),
	}); err != nil {
		return fmt.Errorf("failed to update cargo bottom distance: %w", err)
	}

	return nil
}

func (r *cargoRepository) UpdateCargoDoorMotorState(ctx context.Context, params cargo.UpdateCargoDoorMotorStateParams) error {
	var direction int64
	switch params.Direction {
	case cargo.DirectionOpen:
		direction = 0
	case cargo.DirectionClose:
		direction = 1
	default:
		return fmt.Errorf("invalid direction: %s", params.Direction)
	}

	if _, err := r.queries.CargoDoorMotorUpdate(ctx, r.db, sqlc.CargoDoorMotorUpdateParams{
		Direction: direction,
		Speed:     int64(params.Speed),
		IsRunning: boolToInt64(params.IsRunning),
		Enabled:   boolToInt64(params.Enabled),
		UpdatedAt: time.Now().Format(time.RFC3339),
	}); err != nil {
		return fmt.Errorf("failed to update cargo door motor state: %w", err)
	}

	return nil
}

func boolToInt64(b bool) int64 {
	if b {
		return 1
	}
	return 0
}
