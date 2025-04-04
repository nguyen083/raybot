package standalone

import (
	"fmt"

	"github.com/tbe-team/raybot/internal/application"
	"github.com/tbe-team/raybot/internal/handlers/picserial"
)

func startPICSerial(app *application.Application, interruptChan <-chan any) error {
	service := picserial.New(
		app.Cfg.Hardware.PIC,
		app.Log,
		app.BatteryService,
		app.DistanceSensorService,
		app.LiftMotorService,
		app.DriveMotorService,
	)

	cleanup, err := service.Run(app.Context)
	if err != nil {
		return fmt.Errorf("error running PIC serial service: %w", err)
	}

	app.Log.Info("pic serial service started")

	<-interruptChan

	app.Log.Debug("pic serial service is shutting down")

	if err := cleanup(app.Context); err != nil {
		return fmt.Errorf("error cleaning up PIC serial service: %w", err)
	}

	app.Log.Debug("pic serial service stopped")

	return nil
}
