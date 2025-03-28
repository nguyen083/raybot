// Code generated by mockery v2.53.1. DO NOT EDIT.

package mocks

import (
	context "context"

	mock "github.com/stretchr/testify/mock"
	service "github.com/tbe-team/raybot/internal/service"
)

// FakeSystemService is an autogenerated mock type for the SystemService type
type FakeSystemService struct {
	mock.Mock
}

type FakeSystemService_Expecter struct {
	mock *mock.Mock
}

func (_m *FakeSystemService) EXPECT() *FakeSystemService_Expecter {
	return &FakeSystemService_Expecter{mock: &_m.Mock}
}

// GetSystemConfig provides a mock function with given fields: ctx
func (_m *FakeSystemService) GetSystemConfig(ctx context.Context) (service.GetSystemConfigOutput, error) {
	ret := _m.Called(ctx)

	if len(ret) == 0 {
		panic("no return value specified for GetSystemConfig")
	}

	var r0 service.GetSystemConfigOutput
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) (service.GetSystemConfigOutput, error)); ok {
		return rf(ctx)
	}
	if rf, ok := ret.Get(0).(func(context.Context) service.GetSystemConfigOutput); ok {
		r0 = rf(ctx)
	} else {
		r0 = ret.Get(0).(service.GetSystemConfigOutput)
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(ctx)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FakeSystemService_GetSystemConfig_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetSystemConfig'
type FakeSystemService_GetSystemConfig_Call struct {
	*mock.Call
}

// GetSystemConfig is a helper method to define mock.On call
//   - ctx context.Context
func (_e *FakeSystemService_Expecter) GetSystemConfig(ctx interface{}) *FakeSystemService_GetSystemConfig_Call {
	return &FakeSystemService_GetSystemConfig_Call{Call: _e.mock.On("GetSystemConfig", ctx)}
}

func (_c *FakeSystemService_GetSystemConfig_Call) Run(run func(ctx context.Context)) *FakeSystemService_GetSystemConfig_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context))
	})
	return _c
}

func (_c *FakeSystemService_GetSystemConfig_Call) Return(_a0 service.GetSystemConfigOutput, _a1 error) *FakeSystemService_GetSystemConfig_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *FakeSystemService_GetSystemConfig_Call) RunAndReturn(run func(context.Context) (service.GetSystemConfigOutput, error)) *FakeSystemService_GetSystemConfig_Call {
	_c.Call.Return(run)
	return _c
}

// RestartApplication provides a mock function with given fields: ctx
func (_m *FakeSystemService) RestartApplication(ctx context.Context) error {
	ret := _m.Called(ctx)

	if len(ret) == 0 {
		panic("no return value specified for RestartApplication")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context) error); ok {
		r0 = rf(ctx)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// FakeSystemService_RestartApplication_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'RestartApplication'
type FakeSystemService_RestartApplication_Call struct {
	*mock.Call
}

// RestartApplication is a helper method to define mock.On call
//   - ctx context.Context
func (_e *FakeSystemService_Expecter) RestartApplication(ctx interface{}) *FakeSystemService_RestartApplication_Call {
	return &FakeSystemService_RestartApplication_Call{Call: _e.mock.On("RestartApplication", ctx)}
}

func (_c *FakeSystemService_RestartApplication_Call) Run(run func(ctx context.Context)) *FakeSystemService_RestartApplication_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context))
	})
	return _c
}

func (_c *FakeSystemService_RestartApplication_Call) Return(_a0 error) *FakeSystemService_RestartApplication_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *FakeSystemService_RestartApplication_Call) RunAndReturn(run func(context.Context) error) *FakeSystemService_RestartApplication_Call {
	_c.Call.Return(run)
	return _c
}

// UpdateSystemConfig provides a mock function with given fields: ctx, params
func (_m *FakeSystemService) UpdateSystemConfig(ctx context.Context, params service.UpdateSystemConfigParams) (service.UpdateSystemConfigOutput, error) {
	ret := _m.Called(ctx, params)

	if len(ret) == 0 {
		panic("no return value specified for UpdateSystemConfig")
	}

	var r0 service.UpdateSystemConfigOutput
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, service.UpdateSystemConfigParams) (service.UpdateSystemConfigOutput, error)); ok {
		return rf(ctx, params)
	}
	if rf, ok := ret.Get(0).(func(context.Context, service.UpdateSystemConfigParams) service.UpdateSystemConfigOutput); ok {
		r0 = rf(ctx, params)
	} else {
		r0 = ret.Get(0).(service.UpdateSystemConfigOutput)
	}

	if rf, ok := ret.Get(1).(func(context.Context, service.UpdateSystemConfigParams) error); ok {
		r1 = rf(ctx, params)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FakeSystemService_UpdateSystemConfig_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'UpdateSystemConfig'
type FakeSystemService_UpdateSystemConfig_Call struct {
	*mock.Call
}

// UpdateSystemConfig is a helper method to define mock.On call
//   - ctx context.Context
//   - params service.UpdateSystemConfigParams
func (_e *FakeSystemService_Expecter) UpdateSystemConfig(ctx interface{}, params interface{}) *FakeSystemService_UpdateSystemConfig_Call {
	return &FakeSystemService_UpdateSystemConfig_Call{Call: _e.mock.On("UpdateSystemConfig", ctx, params)}
}

func (_c *FakeSystemService_UpdateSystemConfig_Call) Run(run func(ctx context.Context, params service.UpdateSystemConfigParams)) *FakeSystemService_UpdateSystemConfig_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(service.UpdateSystemConfigParams))
	})
	return _c
}

func (_c *FakeSystemService_UpdateSystemConfig_Call) Return(_a0 service.UpdateSystemConfigOutput, _a1 error) *FakeSystemService_UpdateSystemConfig_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *FakeSystemService_UpdateSystemConfig_Call) RunAndReturn(run func(context.Context, service.UpdateSystemConfigParams) (service.UpdateSystemConfigOutput, error)) *FakeSystemService_UpdateSystemConfig_Call {
	_c.Call.Return(run)
	return _c
}

// NewFakeSystemService creates a new instance of FakeSystemService. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewFakeSystemService(t interface {
	mock.TestingT
	Cleanup(func())
}) *FakeSystemService {
	mock := &FakeSystemService{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
