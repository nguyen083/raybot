package main

import (
	"log"
	"os"
	"sync"

	"github.com/tbe-team/raybot/cmd/raybot/grpc"
	"github.com/tbe-team/raybot/cmd/raybot/http"
	"github.com/tbe-team/raybot/cmd/raybot/pic"
	"github.com/tbe-team/raybot/internal/application"
	"github.com/tbe-team/raybot/internal/config"
	"github.com/tbe-team/raybot/pkg/cmdutil"
)

func main() {
	configSvc, err := config.NewManager()
	if err != nil {
		log.Printf("failed to create config service: %v\n", err)
		os.Exit(1)
	}

	app, cleanup, err := application.New(configSvc)
	if err != nil {
		log.Printf("failed to create application: %v\n", err)
		os.Exit(1)
	}
	defer func() {
		if err := cleanup(); err != nil {
			log.Printf("failed to cleanup application: %v\n", err)
			os.Exit(1)
		}
	}()

	interruptChan := cmdutil.InterruptChan()

	// Ensure PIC serial service is started before GRPC and HTTP services
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		if err := pic.Start(app); err != nil {
			log.Printf("failed to start PIC serial service: %v\n", err)
			os.Exit(1)
		}
	}()

	wg.Wait()

	go func() {
		if err := grpc.Start(app); err != nil {
			log.Printf("failed to start GRPC service: %v\n", err)
			os.Exit(1)
		}
	}()

	go func() {
		if err := http.Start(app); err != nil {
			log.Printf("failed to start HTTP service: %v\n", err)
			os.Exit(1)
		}
	}()

	<-interruptChan
}
