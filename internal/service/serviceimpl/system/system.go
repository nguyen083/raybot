package system

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"os"
	"os/exec"
	"time"

	"github.com/tbe-team/raybot/internal/config"
	"github.com/tbe-team/raybot/internal/service"
	"github.com/tbe-team/raybot/pkg/xerror"
)

var (
	ErrInvalidConfig = xerror.ValidationFailed(nil, "invalid config")
)

type Service struct {
	cfgManager config.Manager
}

func NewService(cfgManager config.Manager) *Service {
	return &Service{
		cfgManager: cfgManager,
	}
}

func (s Service) GetSystemConfig(_ context.Context) (service.GetSystemConfigOutput, error) {
	cfg := s.cfgManager.GetConfig()
	return configToUpdateSystemConfigOutput(cfg), nil
}

func (s Service) UpdateSystemConfig(ctx context.Context, params service.UpdateSystemConfigParams) (service.UpdateSystemConfigOutput, error) {
	cfg := s.cfgManager.GetConfig()

	cfg.Log.Level = params.LogConfig.Level
	cfg.Log.Format = params.LogConfig.Format
	cfg.Log.AddSource = params.LogConfig.AddSource

	cfg.GRPC.Server.Enable = params.GRPCConfig.Server.Enable
	cfg.GRPC.Cloud.Address = params.GRPCConfig.Cloud.Address
	cfg.GRPC.Cloud.Token = params.GRPCConfig.Cloud.Token

	cfg.HTTP.EnableSwagger = params.HTTPConfig.EnableSwagger

	cfg.PIC.Serial.Port = params.PICConfig.Serial.Port
	cfg.PIC.Serial.BaudRate = params.PICConfig.Serial.BaudRate
	cfg.PIC.Serial.DataBits = params.PICConfig.Serial.DataBits
	cfg.PIC.Serial.StopBits = params.PICConfig.Serial.StopBits
	cfg.PIC.Serial.Parity = params.PICConfig.Serial.Parity
	cfg.PIC.Serial.ReadTimeout = params.PICConfig.Serial.ReadTimeout

	cfg.ESP.Serial.Port = params.ESPConfig.Serial.Port
	cfg.ESP.Serial.BaudRate = params.ESPConfig.Serial.BaudRate
	cfg.ESP.Serial.DataBits = params.ESPConfig.Serial.DataBits
	cfg.ESP.Serial.StopBits = params.ESPConfig.Serial.StopBits
	cfg.ESP.Serial.Parity = params.ESPConfig.Serial.Parity
	cfg.ESP.Serial.ReadTimeout = params.ESPConfig.Serial.ReadTimeout

	if err := s.cfgManager.SaveConfig(ctx, cfg); err != nil {
		if errors.Is(err, config.ErrInvalidConfig) {
			return service.UpdateSystemConfigOutput{}, ErrInvalidConfig
		}
		return service.UpdateSystemConfigOutput{}, fmt.Errorf("failed to set config: %w", err)
	}

	return configToUpdateSystemConfigOutput(cfg), nil
}

func (s Service) RestartApplication(_ context.Context) error {
	go func() {
		time.Sleep(3 * time.Second)

		self, err := os.Executable()
		if err != nil {
			slog.Error("failed to restart application", slog.Any("error", err))
		}

		cmd := exec.Command(self, os.Args[1:]...)
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		cmd.Stdin = os.Stdin
		cmd.Env = os.Environ()
		if err := cmd.Start(); err != nil {
			slog.Error("failed to restart application", slog.Any("error", err))
		}

		os.Exit(0)
	}()

	return nil
}

func configToUpdateSystemConfigOutput(cfg config.Config) service.UpdateSystemConfigOutput {
	return service.UpdateSystemConfigOutput{
		LogConfig: service.LogConfig{
			Level:     cfg.Log.Level,
			Format:    cfg.Log.Format,
			AddSource: cfg.Log.AddSource,
		},
		GRPCConfig: service.GRPCConfig{
			Server: service.GRPCServerConfig{
				Enable: cfg.GRPC.Server.Enable,
			},
			Cloud: service.CloudConfig{
				Address: cfg.GRPC.Cloud.Address,
				Token:   cfg.GRPC.Cloud.Token,
			},
		},
		HTTPConfig: service.HTTPConfig{
			EnableSwagger: cfg.HTTP.EnableSwagger,
		},
		PICConfig: service.PICConfig{
			Serial: service.SerialConfig{
				Port:        cfg.PIC.Serial.Port,
				BaudRate:    cfg.PIC.Serial.BaudRate,
				DataBits:    cfg.PIC.Serial.DataBits,
				StopBits:    cfg.PIC.Serial.StopBits,
				Parity:      cfg.PIC.Serial.Parity,
				ReadTimeout: cfg.PIC.Serial.ReadTimeout,
			},
		},
		ESPConfig: service.ESPConfig{
			Serial: service.SerialConfig{
				Port:        cfg.ESP.Serial.Port,
				BaudRate:    cfg.ESP.Serial.BaudRate,
				DataBits:    cfg.ESP.Serial.DataBits,
				StopBits:    cfg.ESP.Serial.StopBits,
				Parity:      cfg.ESP.Serial.Parity,
				ReadTimeout: cfg.ESP.Serial.ReadTimeout,
			},
		},
	}
}
