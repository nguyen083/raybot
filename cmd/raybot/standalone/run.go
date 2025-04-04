package standalone

import (
	"log"
	"os"
	"sync"

	"github.com/tbe-team/raybot/internal/application"
	"github.com/tbe-team/raybot/pkg/cmdutil"
)

func Run(configFilePath, dbPath string) {
	app, cleanup, err := application.New(configFilePath, dbPath)
	if err != nil {
		log.Printf("error creating application: %v", err)
		os.Exit(1)
	}
	defer func() {
		if err := cleanup(); err != nil {
			log.Printf("error cleaning up: %v", err)
		}
	}()

	interruptChan := cmdutil.InterruptChan()
	var wg sync.WaitGroup

	wg.Add(1)
	go func() {
		defer wg.Done()
		if err := startPICSerial(app, interruptChan); err != nil {
			log.Printf("error starting PIC serial service: %v", err)
		}
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		if err := startESPSerial(app, interruptChan); err != nil {
			log.Printf("error starting ESP serial service: %v", err)
		}
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		if err := startRFIDUSB(app, interruptChan); err != nil {
			log.Printf("error starting RFID USB service: %v", err)
		}
	}()

	wg.Wait()
}
