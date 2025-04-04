package config

type GRPC struct {
	Enable bool `yaml:"enable"`
}

func (g GRPC) Validate() error {
	return nil
}
