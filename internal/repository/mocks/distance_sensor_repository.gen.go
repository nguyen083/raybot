// Code generated by mockery v2.53.1. DO NOT EDIT.

package mocks

import (
	context "context"

	mock "github.com/stretchr/testify/mock"
	db "github.com/tbe-team/raybot/internal/storage/db"

	model "github.com/tbe-team/raybot/internal/model"
)

// FakeDistanceSensorRepository is an autogenerated mock type for the DistanceSensorRepository type
type FakeDistanceSensorRepository struct {
	mock.Mock
}

type FakeDistanceSensorRepository_Expecter struct {
	mock *mock.Mock
}

func (_m *FakeDistanceSensorRepository) EXPECT() *FakeDistanceSensorRepository_Expecter {
	return &FakeDistanceSensorRepository_Expecter{mock: &_m.Mock}
}

// GetDistanceSensor provides a mock function with given fields: ctx, _a1
func (_m *FakeDistanceSensorRepository) GetDistanceSensor(ctx context.Context, _a1 db.SQLDB) (model.DistanceSensor, error) {
	ret := _m.Called(ctx, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetDistanceSensor")
	}

	var r0 model.DistanceSensor
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, db.SQLDB) (model.DistanceSensor, error)); ok {
		return rf(ctx, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, db.SQLDB) model.DistanceSensor); ok {
		r0 = rf(ctx, _a1)
	} else {
		r0 = ret.Get(0).(model.DistanceSensor)
	}

	if rf, ok := ret.Get(1).(func(context.Context, db.SQLDB) error); ok {
		r1 = rf(ctx, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FakeDistanceSensorRepository_GetDistanceSensor_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetDistanceSensor'
type FakeDistanceSensorRepository_GetDistanceSensor_Call struct {
	*mock.Call
}

// GetDistanceSensor is a helper method to define mock.On call
//   - ctx context.Context
//   - _a1 db.SQLDB
func (_e *FakeDistanceSensorRepository_Expecter) GetDistanceSensor(ctx interface{}, _a1 interface{}) *FakeDistanceSensorRepository_GetDistanceSensor_Call {
	return &FakeDistanceSensorRepository_GetDistanceSensor_Call{Call: _e.mock.On("GetDistanceSensor", ctx, _a1)}
}

func (_c *FakeDistanceSensorRepository_GetDistanceSensor_Call) Run(run func(ctx context.Context, _a1 db.SQLDB)) *FakeDistanceSensorRepository_GetDistanceSensor_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(db.SQLDB))
	})
	return _c
}

func (_c *FakeDistanceSensorRepository_GetDistanceSensor_Call) Return(_a0 model.DistanceSensor, _a1 error) *FakeDistanceSensorRepository_GetDistanceSensor_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *FakeDistanceSensorRepository_GetDistanceSensor_Call) RunAndReturn(run func(context.Context, db.SQLDB) (model.DistanceSensor, error)) *FakeDistanceSensorRepository_GetDistanceSensor_Call {
	_c.Call.Return(run)
	return _c
}

// UpdateDistanceSensor provides a mock function with given fields: ctx, _a1, distanceSensor
func (_m *FakeDistanceSensorRepository) UpdateDistanceSensor(ctx context.Context, _a1 db.SQLDB, distanceSensor model.DistanceSensor) error {
	ret := _m.Called(ctx, _a1, distanceSensor)

	if len(ret) == 0 {
		panic("no return value specified for UpdateDistanceSensor")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, db.SQLDB, model.DistanceSensor) error); ok {
		r0 = rf(ctx, _a1, distanceSensor)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// FakeDistanceSensorRepository_UpdateDistanceSensor_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'UpdateDistanceSensor'
type FakeDistanceSensorRepository_UpdateDistanceSensor_Call struct {
	*mock.Call
}

// UpdateDistanceSensor is a helper method to define mock.On call
//   - ctx context.Context
//   - _a1 db.SQLDB
//   - distanceSensor model.DistanceSensor
func (_e *FakeDistanceSensorRepository_Expecter) UpdateDistanceSensor(ctx interface{}, _a1 interface{}, distanceSensor interface{}) *FakeDistanceSensorRepository_UpdateDistanceSensor_Call {
	return &FakeDistanceSensorRepository_UpdateDistanceSensor_Call{Call: _e.mock.On("UpdateDistanceSensor", ctx, _a1, distanceSensor)}
}

func (_c *FakeDistanceSensorRepository_UpdateDistanceSensor_Call) Run(run func(ctx context.Context, _a1 db.SQLDB, distanceSensor model.DistanceSensor)) *FakeDistanceSensorRepository_UpdateDistanceSensor_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(db.SQLDB), args[2].(model.DistanceSensor))
	})
	return _c
}

func (_c *FakeDistanceSensorRepository_UpdateDistanceSensor_Call) Return(_a0 error) *FakeDistanceSensorRepository_UpdateDistanceSensor_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *FakeDistanceSensorRepository_UpdateDistanceSensor_Call) RunAndReturn(run func(context.Context, db.SQLDB, model.DistanceSensor) error) *FakeDistanceSensorRepository_UpdateDistanceSensor_Call {
	_c.Call.Return(run)
	return _c
}

// NewFakeDistanceSensorRepository creates a new instance of FakeDistanceSensorRepository. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewFakeDistanceSensorRepository(t interface {
	mock.TestingT
	Cleanup(func())
}) *FakeDistanceSensorRepository {
	mock := &FakeDistanceSensorRepository{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
