// Package gen provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.4.1 DO NOT EDIT.
package gen

import (
	"bytes"
	"compress/gzip"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"path"
	"strings"

	"github.com/getkin/kin-openapi/openapi3"
	"github.com/go-chi/chi/v5"
	strictnethttp "github.com/oapi-codegen/runtime/strictmiddleware/nethttp"
)

// ErrorResponse defines model for ErrorResponse.
type ErrorResponse struct {
	// Code custom raybot error code
	Code string `json:"code"`

	// Message custom raybot error message
	Message string        `json:"message"`
	Details *[]FieldError `json:"details,omitempty"`
}

// FieldError defines model for FieldError.
type FieldError struct {
	// Field field name
	Field string `json:"field"`

	// Message error message
	Message string `json:"message"`
}

// GRPCConfig defines model for GRPCConfig.
type GRPCConfig struct {
	// Port The port number for the gRPC server
	Port int `json:"port"`
}

// HTTPConfig defines model for HTTPConfig.
type HTTPConfig struct {
	// EnableSwagger Whether to enable the Swagger UI
	EnableSwagger bool `json:"enableSwagger"`
}

// HealthResponse defines model for HealthResponse.
type HealthResponse struct {
	// Status The health status
	Status string `json:"status"`
}

// LogConfig defines model for LogConfig.
type LogConfig struct {
	// Level The log level for the gRPC server
	Level string `json:"level"`

	// Format The log format for the gRPC server
	Format string `json:"format"`

	// AddSource Whether to add the source to the log
	AddSource bool `json:"addSource"`
}

// PicConfig defines model for PicConfig.
type PicConfig struct {
	Serial SerialConfig `json:"serial"`
}

// SerialConfig defines model for SerialConfig.
type SerialConfig struct {
	// Port The port name for the serial connection
	Port string `json:"port"`

	// BaudRate The baud rate for the serial connection
	BaudRate int `json:"baudRate"`

	// DataBits The data bits for the serial connection
	DataBits int `json:"dataBits"`

	// StopBits The stop bits for the serial connection
	StopBits float64 `json:"stopBits"`

	// Parity The parity for the serial connection
	Parity string `json:"parity"`

	// ReadTimeout The read timeout for the serial connection
	ReadTimeout float64 `json:"readTimeout"`
}

// SystemConfigRequest defines model for SystemConfigRequest.
type SystemConfigRequest struct {
	Grpc GRPCConfig `json:"grpc"`
	Http HTTPConfig `json:"http"`
	Log  LogConfig  `json:"log"`
	Pic  PicConfig  `json:"pic"`
}

// SystemConfigResponse defines model for SystemConfigResponse.
type SystemConfigResponse struct {
	Grpc GRPCConfig `json:"grpc"`
	Http HTTPConfig `json:"http"`
	Log  LogConfig  `json:"log"`
	Pic  PicConfig  `json:"pic"`
}

// UpdateSystemConfigJSONRequestBody defines body for UpdateSystemConfig for application/json ContentType.
type UpdateSystemConfigJSONRequestBody = SystemConfigRequest

// ServerInterface represents all server handlers.
type ServerInterface interface {
	// Get health status
	// (GET /health)
	GetHealth(w http.ResponseWriter, r *http.Request)
	// Get system configuration
	// (GET /system/config)
	GetSystemConfig(w http.ResponseWriter, r *http.Request)
	// Update system configuration
	// (PUT /system/config)
	UpdateSystemConfig(w http.ResponseWriter, r *http.Request)
	// Restart the application
	// (POST /system/restart)
	RestartApplication(w http.ResponseWriter, r *http.Request)
}

// Unimplemented server implementation that returns http.StatusNotImplemented for each endpoint.

type Unimplemented struct{}

// Get health status
// (GET /health)
func (_ Unimplemented) GetHealth(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

// Get system configuration
// (GET /system/config)
func (_ Unimplemented) GetSystemConfig(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

// Update system configuration
// (PUT /system/config)
func (_ Unimplemented) UpdateSystemConfig(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

// Restart the application
// (POST /system/restart)
func (_ Unimplemented) RestartApplication(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

// ServerInterfaceWrapper converts contexts to parameters.
type ServerInterfaceWrapper struct {
	Handler            ServerInterface
	HandlerMiddlewares []MiddlewareFunc
	ErrorHandlerFunc   func(w http.ResponseWriter, r *http.Request, err error)
}

type MiddlewareFunc func(http.Handler) http.Handler

// GetHealth operation middleware
func (siw *ServerInterfaceWrapper) GetHealth(w http.ResponseWriter, r *http.Request) {

	handler := http.Handler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		siw.Handler.GetHealth(w, r)
	}))

	for _, middleware := range siw.HandlerMiddlewares {
		handler = middleware(handler)
	}

	handler.ServeHTTP(w, r)
}

// GetSystemConfig operation middleware
func (siw *ServerInterfaceWrapper) GetSystemConfig(w http.ResponseWriter, r *http.Request) {

	handler := http.Handler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		siw.Handler.GetSystemConfig(w, r)
	}))

	for _, middleware := range siw.HandlerMiddlewares {
		handler = middleware(handler)
	}

	handler.ServeHTTP(w, r)
}

// UpdateSystemConfig operation middleware
func (siw *ServerInterfaceWrapper) UpdateSystemConfig(w http.ResponseWriter, r *http.Request) {

	handler := http.Handler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		siw.Handler.UpdateSystemConfig(w, r)
	}))

	for _, middleware := range siw.HandlerMiddlewares {
		handler = middleware(handler)
	}

	handler.ServeHTTP(w, r)
}

// RestartApplication operation middleware
func (siw *ServerInterfaceWrapper) RestartApplication(w http.ResponseWriter, r *http.Request) {

	handler := http.Handler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		siw.Handler.RestartApplication(w, r)
	}))

	for _, middleware := range siw.HandlerMiddlewares {
		handler = middleware(handler)
	}

	handler.ServeHTTP(w, r)
}

type UnescapedCookieParamError struct {
	ParamName string
	Err       error
}

func (e *UnescapedCookieParamError) Error() string {
	return fmt.Sprintf("error unescaping cookie parameter '%s'", e.ParamName)
}

func (e *UnescapedCookieParamError) Unwrap() error {
	return e.Err
}

type UnmarshalingParamError struct {
	ParamName string
	Err       error
}

func (e *UnmarshalingParamError) Error() string {
	return fmt.Sprintf("Error unmarshaling parameter %s as JSON: %s", e.ParamName, e.Err.Error())
}

func (e *UnmarshalingParamError) Unwrap() error {
	return e.Err
}

type RequiredParamError struct {
	ParamName string
}

func (e *RequiredParamError) Error() string {
	return fmt.Sprintf("Query argument %s is required, but not found", e.ParamName)
}

type RequiredHeaderError struct {
	ParamName string
	Err       error
}

func (e *RequiredHeaderError) Error() string {
	return fmt.Sprintf("Header parameter %s is required, but not found", e.ParamName)
}

func (e *RequiredHeaderError) Unwrap() error {
	return e.Err
}

type InvalidParamFormatError struct {
	ParamName string
	Err       error
}

func (e *InvalidParamFormatError) Error() string {
	return fmt.Sprintf("Invalid format for parameter %s: %s", e.ParamName, e.Err.Error())
}

func (e *InvalidParamFormatError) Unwrap() error {
	return e.Err
}

type TooManyValuesForParamError struct {
	ParamName string
	Count     int
}

func (e *TooManyValuesForParamError) Error() string {
	return fmt.Sprintf("Expected one value for %s, got %d", e.ParamName, e.Count)
}

// Handler creates http.Handler with routing matching OpenAPI spec.
func Handler(si ServerInterface) http.Handler {
	return HandlerWithOptions(si, ChiServerOptions{})
}

type ChiServerOptions struct {
	BaseURL          string
	BaseRouter       chi.Router
	Middlewares      []MiddlewareFunc
	ErrorHandlerFunc func(w http.ResponseWriter, r *http.Request, err error)
}

// HandlerFromMux creates http.Handler with routing matching OpenAPI spec based on the provided mux.
func HandlerFromMux(si ServerInterface, r chi.Router) http.Handler {
	return HandlerWithOptions(si, ChiServerOptions{
		BaseRouter: r,
	})
}

func HandlerFromMuxWithBaseURL(si ServerInterface, r chi.Router, baseURL string) http.Handler {
	return HandlerWithOptions(si, ChiServerOptions{
		BaseURL:    baseURL,
		BaseRouter: r,
	})
}

// HandlerWithOptions creates http.Handler with additional options
func HandlerWithOptions(si ServerInterface, options ChiServerOptions) http.Handler {
	r := options.BaseRouter

	if r == nil {
		r = chi.NewRouter()
	}
	if options.ErrorHandlerFunc == nil {
		options.ErrorHandlerFunc = func(w http.ResponseWriter, r *http.Request, err error) {
			http.Error(w, err.Error(), http.StatusBadRequest)
		}
	}
	wrapper := ServerInterfaceWrapper{
		Handler:            si,
		HandlerMiddlewares: options.Middlewares,
		ErrorHandlerFunc:   options.ErrorHandlerFunc,
	}

	r.Group(func(r chi.Router) {
		r.Get(options.BaseURL+"/health", wrapper.GetHealth)
	})
	r.Group(func(r chi.Router) {
		r.Get(options.BaseURL+"/system/config", wrapper.GetSystemConfig)
	})
	r.Group(func(r chi.Router) {
		r.Put(options.BaseURL+"/system/config", wrapper.UpdateSystemConfig)
	})
	r.Group(func(r chi.Router) {
		r.Post(options.BaseURL+"/system/restart", wrapper.RestartApplication)
	})

	return r
}

type GetHealthRequestObject struct {
}

type GetHealthResponseObject interface {
	VisitGetHealthResponse(w http.ResponseWriter) error
}

type GetHealth200JSONResponse HealthResponse

func (response GetHealth200JSONResponse) VisitGetHealthResponse(w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)

	return json.NewEncoder(w).Encode(response)
}

type GetHealth400JSONResponse ErrorResponse

func (response GetHealth400JSONResponse) VisitGetHealthResponse(w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(400)

	return json.NewEncoder(w).Encode(response)
}

type GetSystemConfigRequestObject struct {
}

type GetSystemConfigResponseObject interface {
	VisitGetSystemConfigResponse(w http.ResponseWriter) error
}

type GetSystemConfig200JSONResponse SystemConfigResponse

func (response GetSystemConfig200JSONResponse) VisitGetSystemConfigResponse(w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)

	return json.NewEncoder(w).Encode(response)
}

type GetSystemConfig400JSONResponse ErrorResponse

func (response GetSystemConfig400JSONResponse) VisitGetSystemConfigResponse(w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(400)

	return json.NewEncoder(w).Encode(response)
}

type UpdateSystemConfigRequestObject struct {
	Body *UpdateSystemConfigJSONRequestBody
}

type UpdateSystemConfigResponseObject interface {
	VisitUpdateSystemConfigResponse(w http.ResponseWriter) error
}

type UpdateSystemConfig200JSONResponse SystemConfigResponse

func (response UpdateSystemConfig200JSONResponse) VisitUpdateSystemConfigResponse(w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)

	return json.NewEncoder(w).Encode(response)
}

type UpdateSystemConfig400JSONResponse ErrorResponse

func (response UpdateSystemConfig400JSONResponse) VisitUpdateSystemConfigResponse(w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(400)

	return json.NewEncoder(w).Encode(response)
}

type RestartApplicationRequestObject struct {
}

type RestartApplicationResponseObject interface {
	VisitRestartApplicationResponse(w http.ResponseWriter) error
}

type RestartApplication204Response struct {
}

func (response RestartApplication204Response) VisitRestartApplicationResponse(w http.ResponseWriter) error {
	w.WriteHeader(204)
	return nil
}

type RestartApplication400JSONResponse ErrorResponse

func (response RestartApplication400JSONResponse) VisitRestartApplicationResponse(w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(400)

	return json.NewEncoder(w).Encode(response)
}

// StrictServerInterface represents all server handlers.
type StrictServerInterface interface {
	// Get health status
	// (GET /health)
	GetHealth(ctx context.Context, request GetHealthRequestObject) (GetHealthResponseObject, error)
	// Get system configuration
	// (GET /system/config)
	GetSystemConfig(ctx context.Context, request GetSystemConfigRequestObject) (GetSystemConfigResponseObject, error)
	// Update system configuration
	// (PUT /system/config)
	UpdateSystemConfig(ctx context.Context, request UpdateSystemConfigRequestObject) (UpdateSystemConfigResponseObject, error)
	// Restart the application
	// (POST /system/restart)
	RestartApplication(ctx context.Context, request RestartApplicationRequestObject) (RestartApplicationResponseObject, error)
}

type StrictHandlerFunc = strictnethttp.StrictHTTPHandlerFunc
type StrictMiddlewareFunc = strictnethttp.StrictHTTPMiddlewareFunc

type StrictHTTPServerOptions struct {
	RequestErrorHandlerFunc  func(w http.ResponseWriter, r *http.Request, err error)
	ResponseErrorHandlerFunc func(w http.ResponseWriter, r *http.Request, err error)
}

func NewStrictHandler(ssi StrictServerInterface, middlewares []StrictMiddlewareFunc) ServerInterface {
	return &strictHandler{ssi: ssi, middlewares: middlewares, options: StrictHTTPServerOptions{
		RequestErrorHandlerFunc: func(w http.ResponseWriter, r *http.Request, err error) {
			http.Error(w, err.Error(), http.StatusBadRequest)
		},
		ResponseErrorHandlerFunc: func(w http.ResponseWriter, r *http.Request, err error) {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		},
	}}
}

func NewStrictHandlerWithOptions(ssi StrictServerInterface, middlewares []StrictMiddlewareFunc, options StrictHTTPServerOptions) ServerInterface {
	return &strictHandler{ssi: ssi, middlewares: middlewares, options: options}
}

type strictHandler struct {
	ssi         StrictServerInterface
	middlewares []StrictMiddlewareFunc
	options     StrictHTTPServerOptions
}

// GetHealth operation middleware
func (sh *strictHandler) GetHealth(w http.ResponseWriter, r *http.Request) {
	var request GetHealthRequestObject

	handler := func(ctx context.Context, w http.ResponseWriter, r *http.Request, request interface{}) (interface{}, error) {
		return sh.ssi.GetHealth(ctx, request.(GetHealthRequestObject))
	}
	for _, middleware := range sh.middlewares {
		handler = middleware(handler, "GetHealth")
	}

	response, err := handler(r.Context(), w, r, request)

	if err != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, err)
	} else if validResponse, ok := response.(GetHealthResponseObject); ok {
		if err := validResponse.VisitGetHealthResponse(w); err != nil {
			sh.options.ResponseErrorHandlerFunc(w, r, err)
		}
	} else if response != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, fmt.Errorf("unexpected response type: %T", response))
	}
}

// GetSystemConfig operation middleware
func (sh *strictHandler) GetSystemConfig(w http.ResponseWriter, r *http.Request) {
	var request GetSystemConfigRequestObject

	handler := func(ctx context.Context, w http.ResponseWriter, r *http.Request, request interface{}) (interface{}, error) {
		return sh.ssi.GetSystemConfig(ctx, request.(GetSystemConfigRequestObject))
	}
	for _, middleware := range sh.middlewares {
		handler = middleware(handler, "GetSystemConfig")
	}

	response, err := handler(r.Context(), w, r, request)

	if err != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, err)
	} else if validResponse, ok := response.(GetSystemConfigResponseObject); ok {
		if err := validResponse.VisitGetSystemConfigResponse(w); err != nil {
			sh.options.ResponseErrorHandlerFunc(w, r, err)
		}
	} else if response != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, fmt.Errorf("unexpected response type: %T", response))
	}
}

// UpdateSystemConfig operation middleware
func (sh *strictHandler) UpdateSystemConfig(w http.ResponseWriter, r *http.Request) {
	var request UpdateSystemConfigRequestObject

	var body UpdateSystemConfigJSONRequestBody
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		sh.options.RequestErrorHandlerFunc(w, r, fmt.Errorf("can't decode JSON body: %w", err))
		return
	}
	request.Body = &body

	handler := func(ctx context.Context, w http.ResponseWriter, r *http.Request, request interface{}) (interface{}, error) {
		return sh.ssi.UpdateSystemConfig(ctx, request.(UpdateSystemConfigRequestObject))
	}
	for _, middleware := range sh.middlewares {
		handler = middleware(handler, "UpdateSystemConfig")
	}

	response, err := handler(r.Context(), w, r, request)

	if err != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, err)
	} else if validResponse, ok := response.(UpdateSystemConfigResponseObject); ok {
		if err := validResponse.VisitUpdateSystemConfigResponse(w); err != nil {
			sh.options.ResponseErrorHandlerFunc(w, r, err)
		}
	} else if response != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, fmt.Errorf("unexpected response type: %T", response))
	}
}

// RestartApplication operation middleware
func (sh *strictHandler) RestartApplication(w http.ResponseWriter, r *http.Request) {
	var request RestartApplicationRequestObject

	handler := func(ctx context.Context, w http.ResponseWriter, r *http.Request, request interface{}) (interface{}, error) {
		return sh.ssi.RestartApplication(ctx, request.(RestartApplicationRequestObject))
	}
	for _, middleware := range sh.middlewares {
		handler = middleware(handler, "RestartApplication")
	}

	response, err := handler(r.Context(), w, r, request)

	if err != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, err)
	} else if validResponse, ok := response.(RestartApplicationResponseObject); ok {
		if err := validResponse.VisitRestartApplicationResponse(w); err != nil {
			sh.options.ResponseErrorHandlerFunc(w, r, err)
		}
	} else if response != nil {
		sh.options.ResponseErrorHandlerFunc(w, r, fmt.Errorf("unexpected response type: %T", response))
	}
}

// Base64 encoded, gzipped, json marshaled Swagger object
var swaggerSpec = []string{

	"H4sIAAAAAAAC/+xXX2/bNhD/KgS3R9VS2rTY/NYEaxdsywInwR6GPNDiWWYn8VTy5MYI/N0HkrItRf8c",
	"oAU2bG82ebz73e/+6omnWJSoQZPl8ydu0zUUwv/8yRg0C7AlagvuoDRYgiEF/jpF6U8l2NSokhRqPudp",
	"ZQkLZsR2icTAqWBeMuLwKIoyBz7niqCYXSN9wEpLHnHalu7YklE64xF/fIVGguHzs13EJZBQuTfp3vkf",
	"3xtY8Tn/Lj6Cj2vk8QcFufTY+e6gWhgjtk3Nb3YRL8BakZ3oxF646ccVQcE0EltNOfJ6t4u4gc+VMiD5",
	"/E9ec7LX+nB4i8tPkJKD3nCkQ/7K3XWB+2OmRdHGWR+M0jxIxrD716IApiw7+PUSAoIH4wx8XNxcXqJe",
	"qazLQImGumDv1sDcDdNVsQTDVmgYrYFli5tLZsFswDRdeJskb88OhpUmyLxAg5lnsL3ZPqw/393dDGEF",
	"LZY53H4RmVPfAf3HGmgNhhGyIOkh1+Ls/qqJmEwFB+tLxByEHgXctt2LHERO6+FCtySosv1cr/1bVos0",
	"kwP/Gs+4ZzBrDX34fsVsiFgh5S1WJoVRUoWUnlHrRd2J+5dj1gS8ErkdZdZ1jBWaQgykXY4ZC/dDWaer",
	"wrn6yaJTTPDoM+lI2f6iQ1qGr0YKK+I5bCAfRuWvJ0BJWFZOr9Ir5BH/IoyD4mu/DXIv+DKUnXgHyAdG",
	"o0Yo+3LgRqVDOWDBKJFPTYVbL1Xr6CRfUNFnuPWuY3spKrkQBP3cu1tmBMGB+2CIpag1pF6yQe2P75Jk",
	"rBe5SEtB4kLRQDW6W7ZUZE8z+MOYNZfupTCKtgNd1t+NG6pzS6P2g2MD7hSlbGdUff2yhHrr4E2MADee",
	"TiKCxxI2MdH2/vYimRqUBoS8UwVgNWDcCTAKEqfZPzt2Fi6xWuYNPsIge8bHKkdB786b0N7tIm4Jy+Hs",
	"cLcvyI6vAeq8d3xGx7ppZHQD/iHz2mz31ufWEhShPhfwuQJL3TLNTJlONYjGrrGL+JqonHrRmPiuB2M2",
	"9eA4yFzyqklIx6bX6Z5+dnm3aqxB4TRDQ0P+P0yRe+nHXm/VLMJHwPsbt4blKoWaPr9Tz/lvV3c84pXJ",
	"+dxbsfM4xhJ02DVmaLK4fmRjJ+s+SRT5ptPSvAFjg9FkdjZLnJxTI0rF5/zNLJklvipo7aMVh73LBw56",
	"2tBHIF/grfVsxr1OI5zQlQxiYfnzhRZSw+t/nSThE08TaK9flGWuUv809nvK4VtxMgfa66Wnu43291+c",
	"u+df0Wb707XH5IWQbN8u3K2tikKYbU3d862WRGZdTtWsP7gXsfV1FaeH1WA0EkGaBekqxKAvHs1q/ZZR",
	"6e0K/4bYDBC5D1G45g+uffQN6PtSuoXs5JAE+U5UPLoLlNtvFJC996Gr/Z8DxxyoA3hqGjQq1YAlETbG",
	"Em1PbiyCgE+Ohm9MrAgMe8MspKhlTx+tH74/vumW7nnX3jWyy5rNfw6/AyT0cuse+g9Jd/5UT8FYlCre",
	"nPHdw+7vAAAA///IfolhXRQAAA==",
}

// GetSwagger returns the content of the embedded swagger specification file
// or error if failed to decode
func decodeSpec() ([]byte, error) {
	zipped, err := base64.StdEncoding.DecodeString(strings.Join(swaggerSpec, ""))
	if err != nil {
		return nil, fmt.Errorf("error base64 decoding spec: %w", err)
	}
	zr, err := gzip.NewReader(bytes.NewReader(zipped))
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %w", err)
	}
	var buf bytes.Buffer
	_, err = buf.ReadFrom(zr)
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %w", err)
	}

	return buf.Bytes(), nil
}

var rawSpec = decodeSpecCached()

// a naive cached of a decoded swagger spec
func decodeSpecCached() func() ([]byte, error) {
	data, err := decodeSpec()
	return func() ([]byte, error) {
		return data, err
	}
}

// Constructs a synthetic filesystem for resolving external references when loading openapi specifications.
func PathToRawSpec(pathToFile string) map[string]func() ([]byte, error) {
	res := make(map[string]func() ([]byte, error))
	if len(pathToFile) > 0 {
		res[pathToFile] = rawSpec
	}

	return res
}

// GetSwagger returns the Swagger specification corresponding to the generated code
// in this file. The external references of Swagger specification are resolved.
// The logic of resolving external references is tightly connected to "import-mapping" feature.
// Externally referenced files must be embedded in the corresponding golang packages.
// Urls can be supported but this task was out of the scope.
func GetSwagger() (swagger *openapi3.T, err error) {
	resolvePath := PathToRawSpec("")

	loader := openapi3.NewLoader()
	loader.IsExternalRefsAllowed = true
	loader.ReadFromURIFunc = func(loader *openapi3.Loader, url *url.URL) ([]byte, error) {
		pathToFile := url.String()
		pathToFile = path.Clean(pathToFile)
		getSpec, ok := resolvePath[pathToFile]
		if !ok {
			err1 := fmt.Errorf("path not found: %s", pathToFile)
			return nil, err1
		}
		return getSpec()
	}
	var specData []byte
	specData, err = rawSpec()
	if err != nil {
		return
	}
	swagger, err = loader.LoadFromData(specData)
	if err != nil {
		return
	}
	return
}
