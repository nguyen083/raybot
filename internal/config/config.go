package config

import (
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
)

type Config struct {
	Log      Log      `yaml:"log"`
	Hardware Hardware `yaml:"hardware"`
	Cloud    Cloud    `yaml:"cloud"`
	HTTP     HTTP     `yaml:"http"`

	Wifi Wifi `yaml:"wifi"`

	Cron Cron `yaml:"cron"`

	ConfigFilePath string `yaml:"-"`
	DBPath         string `yaml:"-"`
}

func (c *Config) Validate() error {
	if err := c.Log.Validate(); err != nil {
		return fmt.Errorf("validate log: %w", err)
	}

	if err := c.Hardware.Validate(); err != nil {
		return fmt.Errorf("validate hardware: %w", err)
	}

	if err := c.Cloud.Validate(); err != nil {
		return fmt.Errorf("validate cloud: %w", err)
	}

	if err := c.HTTP.Validate(); err != nil {
		return fmt.Errorf("validate http: %w", err)
	}

	if err := c.Wifi.Validate(); err != nil {
		return fmt.Errorf("validate wifi: %w", err)
	}

	if err := c.Cron.Validate(); err != nil {
		return fmt.Errorf("validate cron: %w", err)
	}

	return nil
}

func NewConfig(configFilePath, dbPath string) (*Config, error) {
	config := &Config{
		ConfigFilePath: configFilePath,
		DBPath:         dbPath,
	}

	configBytes, err := os.ReadFile(configFilePath)
	if err != nil {
		return nil, fmt.Errorf("read YAML config file: %w", err)
	}

	if err := yaml.Unmarshal(configBytes, config); err != nil {
		return nil, fmt.Errorf("unmarshal YAML config: %w", err)
	}

	if err := config.Validate(); err != nil {
		return nil, fmt.Errorf("validate config: %w", err)
	}

	return config, nil
}
