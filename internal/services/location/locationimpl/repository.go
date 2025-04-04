package locationimpl

import (
	"context"
	"fmt"
	"time"

	"github.com/tbe-team/raybot/internal/services/location"
	"github.com/tbe-team/raybot/internal/storage/db"
	"github.com/tbe-team/raybot/internal/storage/db/sqlc"
)

type repository struct {
	db      db.DB
	queries *sqlc.Queries
}

func NewLocationRepository(db db.DB, queries *sqlc.Queries) location.Repository {
	return &repository{
		db:      db,
		queries: queries,
	}
}

func (r *repository) UpdateLocation(ctx context.Context, location string) error {
	if err := r.queries.LocationUpdate(ctx, r.db, sqlc.LocationUpdateParams{
		CurrentLocation: location,
		UpdatedAt:       time.Now().Format(time.RFC3339),
	}); err != nil {
		return fmt.Errorf("queries update location: %w", err)
	}

	return nil
}
