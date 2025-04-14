// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0

package sqlc

type BatteryChargeSetting struct {
	ID           int64  `json:"id"`
	CurrentLimit int64  `json:"current_limit"`
	Enabled      int64  `json:"enabled"`
	UpdatedAt    string `json:"updated_at"`
}

type BatteryDischargeSetting struct {
	ID           int64  `json:"id"`
	CurrentLimit int64  `json:"current_limit"`
	Enabled      int64  `json:"enabled"`
	UpdatedAt    string `json:"updated_at"`
}

type Cargo struct {
	ID             int64  `json:"id"`
	IsOpen         int64  `json:"is_open"`
	QrCode         string `json:"qr_code"`
	BottomDistance int64  `json:"bottom_distance"`
	UpdatedAt      string `json:"updated_at"`
}

type CargoDoorMotor struct {
	ID        int64  `json:"id"`
	Direction int64  `json:"direction"`
	Speed     int64  `json:"speed"`
	IsRunning int64  `json:"is_running"`
	Enabled   int64  `json:"enabled"`
	UpdatedAt string `json:"updated_at"`
}

type Command struct {
	ID          int64   `json:"id"`
	Type        string  `json:"type"`
	Status      string  `json:"status"`
	Source      string  `json:"source"`
	Inputs      string  `json:"inputs"`
	Error       *string `json:"error"`
	CompletedAt *string `json:"completed_at"`
	CreatedAt   string  `json:"created_at"`
	UpdatedAt   string  `json:"updated_at"`
	StartedAt   *string `json:"started_at"`
}

type Location struct {
	ID              int64  `json:"id"`
	CurrentLocation string `json:"current_location"`
	UpdatedAt       string `json:"updated_at"`
}

type Robot struct {
	ID int64 `json:"id"`
}
