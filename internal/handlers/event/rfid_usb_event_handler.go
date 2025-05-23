package event

import (
	"context"
	"log/slog"
	"time"

	"github.com/tbe-team/raybot/internal/events"
	"github.com/tbe-team/raybot/internal/services/appstate"
	"github.com/tbe-team/raybot/pkg/ptr"
)

func (s *Service) HandleRFIDUSBConnectedEvent(ctx context.Context, _ events.RFIDUSBConnectedEvent) {
	if err := s.appStateService.UpdateRFIDUSBConnection(ctx, appstate.UpdateRFIDUSBConnectionParams{
		Connected:          true,
		SetConnected:       true,
		LastConnectedAt:    ptr.New(time.Now()),
		SetLastConnectedAt: true,
	}); err != nil {
		s.log.Error("failed to update RFID USB connection", slog.Any("error", err))
	}
}

func (s *Service) HandleRFIDUSBDisconnectedEvent(ctx context.Context, event events.RFIDUSBDisconnectedEvent) {
	var errStr string
	if event.Error != nil {
		errStr = event.Error.Error()
	}

	if err := s.appStateService.UpdateRFIDUSBConnection(ctx, appstate.UpdateRFIDUSBConnectionParams{
		Connected:    false,
		SetConnected: true,
		Error:        &errStr,
		SetError:     true,
	}); err != nil {
		s.log.Error("failed to update RFID USB connection", slog.Any("error", err))
	}
}
