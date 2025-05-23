package rfidusb

import (
	"fmt"

	"github.com/karalabe/hid"

	"github.com/tbe-team/raybot/pkg/xerror"
)

var ErrRFIDUSBNotConnected = xerror.NotFound(nil, "rfidusb.notConnected", "RFID USB not connected")

const (
	vendorID  = 0x1a86
	productID = 0xdd01

	startByte = 0x02
	enterByte = 0x28
)

// hidKeyMap maps HID keyboard scan codes to their ASCII character equivalents
var hidKeyMap = map[byte]byte{
	0x1E: '1',
	0x1F: '2',
	0x20: '3',
	0x21: '4',
	0x22: '5',
	0x23: '6',
	0x24: '7',
	0x25: '8',
	0x26: '9',
	0x27: '0',
}

type client struct {
	device *hid.Device
}

func newClient() *client {
	return &client{}
}

func (c *client) Open() error {
	devices := hid.Enumerate(vendorID, productID)
	if len(devices) == 0 {
		return fmt.Errorf("no RFID reader found")
	}

	device, err := devices[0].Open()
	if err != nil {
		return fmt.Errorf("failed to open RFID reader: %v", err)
	}

	c.device = device
	return nil
}

func (c *client) Read() (string, error) {
	if c.device == nil {
		return "", ErrRFIDUSBNotConnected
	}

	tag := []byte{}

	for {
		buf := make([]byte, 9)
		_, err := c.device.Read(buf)
		if err != nil {
			return "", fmt.Errorf("failed to read from device: %v", err)
		}

		// Process meaningful data from the 4th byte
		if len(buf) >= 9 && buf[0] == startByte && buf[3] != 0x00 {
			tagValue := buf[3]
			if tagValue == enterByte {
				break
			}
			tag = append(tag, hidKeyMap[tagValue])
		}
	}

	return string(tag), nil
}

func (c *client) Close() error {
	if c.device == nil {
		return nil
	}

	return c.device.Close()
}
