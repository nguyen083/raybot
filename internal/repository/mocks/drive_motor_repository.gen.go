// Code generated by mockery v2.53.1. DO NOT EDIT.

package mocks

import (
	context "context"

	mock "github.com/stretchr/testify/mock"
	db "github.com/tbe-team/raybot/internal/storage/db"

	model "github.com/tbe-team/raybot/internal/model"
)

// FakeDriveMotorRepository is an autogenerated mock type for the DriveMotorRepository type
type FakeDriveMotorRepository struct {
	mock.Mock
}

type FakeDriveMotorRepository_Expecter struct {
	mock *mock.Mock
}

func (_m *FakeDriveMotorRepository) EXPECT() *FakeDriveMotorRepository_Expecter {
	return &FakeDriveMotorRepository_Expecter{mock: &_m.Mock}
}

// GetDriveMotor provides a mock function with given fields: ctx, _a1
func (_m *FakeDriveMotorRepository) GetDriveMotor(ctx context.Context, _a1 db.SQLDB) (model.DriveMotor, error) {
	ret := _m.Called(ctx, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetDriveMotor")
	}

	var r0 model.DriveMotor
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, db.SQLDB) (model.DriveMotor, error)); ok {
		return rf(ctx, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, db.SQLDB) model.DriveMotor); ok {
		r0 = rf(ctx, _a1)
	} else {
		r0 = ret.Get(0).(model.DriveMotor)
	}

	if rf, ok := ret.Get(1).(func(context.Context, db.SQLDB) error); ok {
		r1 = rf(ctx, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FakeDriveMotorRepository_GetDriveMotor_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetDriveMotor'
type FakeDriveMotorRepository_GetDriveMotor_Call struct {
	*mock.Call
}

// GetDriveMotor is a helper method to define mock.On call
//   - ctx context.Context
//   - _a1 db.SQLDB
func (_e *FakeDriveMotorRepository_Expecter) GetDriveMotor(ctx interface{}, _a1 interface{}) *FakeDriveMotorRepository_GetDriveMotor_Call {
	return &FakeDriveMotorRepository_GetDriveMotor_Call{Call: _e.mock.On("GetDriveMotor", ctx, _a1)}
}

func (_c *FakeDriveMotorRepository_GetDriveMotor_Call) Run(run func(ctx context.Context, _a1 db.SQLDB)) *FakeDriveMotorRepository_GetDriveMotor_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(db.SQLDB))
	})
	return _c
}

func (_c *FakeDriveMotorRepository_GetDriveMotor_Call) Return(_a0 model.DriveMotor, _a1 error) *FakeDriveMotorRepository_GetDriveMotor_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *FakeDriveMotorRepository_GetDriveMotor_Call) RunAndReturn(run func(context.Context, db.SQLDB) (model.DriveMotor, error)) *FakeDriveMotorRepository_GetDriveMotor_Call {
	_c.Call.Return(run)
	return _c
}

// UpdateDriveMotor provides a mock function with given fields: ctx, _a1, driveMotor
func (_m *FakeDriveMotorRepository) UpdateDriveMotor(ctx context.Context, _a1 db.SQLDB, driveMotor model.DriveMotor) error {
	ret := _m.Called(ctx, _a1, driveMotor)

	if len(ret) == 0 {
		panic("no return value specified for UpdateDriveMotor")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, db.SQLDB, model.DriveMotor) error); ok {
		r0 = rf(ctx, _a1, driveMotor)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// FakeDriveMotorRepository_UpdateDriveMotor_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'UpdateDriveMotor'
type FakeDriveMotorRepository_UpdateDriveMotor_Call struct {
	*mock.Call
}

// UpdateDriveMotor is a helper method to define mock.On call
//   - ctx context.Context
//   - _a1 db.SQLDB
//   - driveMotor model.DriveMotor
func (_e *FakeDriveMotorRepository_Expecter) UpdateDriveMotor(ctx interface{}, _a1 interface{}, driveMotor interface{}) *FakeDriveMotorRepository_UpdateDriveMotor_Call {
	return &FakeDriveMotorRepository_UpdateDriveMotor_Call{Call: _e.mock.On("UpdateDriveMotor", ctx, _a1, driveMotor)}
}

func (_c *FakeDriveMotorRepository_UpdateDriveMotor_Call) Run(run func(ctx context.Context, _a1 db.SQLDB, driveMotor model.DriveMotor)) *FakeDriveMotorRepository_UpdateDriveMotor_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(db.SQLDB), args[2].(model.DriveMotor))
	})
	return _c
}

func (_c *FakeDriveMotorRepository_UpdateDriveMotor_Call) Return(_a0 error) *FakeDriveMotorRepository_UpdateDriveMotor_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *FakeDriveMotorRepository_UpdateDriveMotor_Call) RunAndReturn(run func(context.Context, db.SQLDB, model.DriveMotor) error) *FakeDriveMotorRepository_UpdateDriveMotor_Call {
	_c.Call.Return(run)
	return _c
}

// NewFakeDriveMotorRepository creates a new instance of FakeDriveMotorRepository. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewFakeDriveMotorRepository(t interface {
	mock.TestingT
	Cleanup(func())
}) *FakeDriveMotorRepository {
	mock := &FakeDriveMotorRepository{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
