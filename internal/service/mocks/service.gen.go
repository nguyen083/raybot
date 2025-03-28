// Code generated by mockery v2.53.1. DO NOT EDIT.

package mocks

import (
	mock "github.com/stretchr/testify/mock"
	service "github.com/tbe-team/raybot/internal/service"
)

// FakeService is an autogenerated mock type for the Service type
type FakeService struct {
	mock.Mock
}

type FakeService_Expecter struct {
	mock *mock.Mock
}

func (_m *FakeService) EXPECT() *FakeService_Expecter {
	return &FakeService_Expecter{mock: &_m.Mock}
}

// PICService provides a mock function with no fields
func (_m *FakeService) PICService() service.PICService {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for PICService")
	}

	var r0 service.PICService
	if rf, ok := ret.Get(0).(func() service.PICService); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(service.PICService)
		}
	}

	return r0
}

// FakeService_PICService_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'PICService'
type FakeService_PICService_Call struct {
	*mock.Call
}

// PICService is a helper method to define mock.On call
func (_e *FakeService_Expecter) PICService() *FakeService_PICService_Call {
	return &FakeService_PICService_Call{Call: _e.mock.On("PICService")}
}

func (_c *FakeService_PICService_Call) Run(run func()) *FakeService_PICService_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *FakeService_PICService_Call) Return(_a0 service.PICService) *FakeService_PICService_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *FakeService_PICService_Call) RunAndReturn(run func() service.PICService) *FakeService_PICService_Call {
	_c.Call.Return(run)
	return _c
}

// RobotService provides a mock function with no fields
func (_m *FakeService) RobotService() service.RobotService {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for RobotService")
	}

	var r0 service.RobotService
	if rf, ok := ret.Get(0).(func() service.RobotService); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(service.RobotService)
		}
	}

	return r0
}

// FakeService_RobotService_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'RobotService'
type FakeService_RobotService_Call struct {
	*mock.Call
}

// RobotService is a helper method to define mock.On call
func (_e *FakeService_Expecter) RobotService() *FakeService_RobotService_Call {
	return &FakeService_RobotService_Call{Call: _e.mock.On("RobotService")}
}

func (_c *FakeService_RobotService_Call) Run(run func()) *FakeService_RobotService_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *FakeService_RobotService_Call) Return(_a0 service.RobotService) *FakeService_RobotService_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *FakeService_RobotService_Call) RunAndReturn(run func() service.RobotService) *FakeService_RobotService_Call {
	_c.Call.Return(run)
	return _c
}

// SystemService provides a mock function with no fields
func (_m *FakeService) SystemService() service.SystemService {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for SystemService")
	}

	var r0 service.SystemService
	if rf, ok := ret.Get(0).(func() service.SystemService); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(service.SystemService)
		}
	}

	return r0
}

// FakeService_SystemService_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'SystemService'
type FakeService_SystemService_Call struct {
	*mock.Call
}

// SystemService is a helper method to define mock.On call
func (_e *FakeService_Expecter) SystemService() *FakeService_SystemService_Call {
	return &FakeService_SystemService_Call{Call: _e.mock.On("SystemService")}
}

func (_c *FakeService_SystemService_Call) Run(run func()) *FakeService_SystemService_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *FakeService_SystemService_Call) Return(_a0 service.SystemService) *FakeService_SystemService_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *FakeService_SystemService_Call) RunAndReturn(run func() service.SystemService) *FakeService_SystemService_Call {
	_c.Call.Return(run)
	return _c
}

// NewFakeService creates a new instance of FakeService. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewFakeService(t interface {
	mock.TestingT
	Cleanup(func())
}) *FakeService {
	mock := &FakeService{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
