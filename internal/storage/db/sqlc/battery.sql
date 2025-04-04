-- name: BatteryChargeSettingUpdate :exec
UPDATE battery_charge_setting
SET
	current_limit = @current_limit,
	enabled = @enabled,
	updated_at = @updated_at
WHERE id = 1;

-- name: BatteryDischargeSettingUpdate :exec
UPDATE battery_discharge_setting
SET
	current_limit = @current_limit,
	enabled = @enabled,
	updated_at = @updated_at
WHERE id = 1;
