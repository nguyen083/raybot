// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: command/v1/command.proto

package commandv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateCommandRequest_Type int32

const (
	CreateCommandRequest_TYPE_UNSPECIFIED      CreateCommandRequest_Type = 0
	CreateCommandRequest_TYPE_MOVE_TO_LOCATION CreateCommandRequest_Type = 1
	CreateCommandRequest_TYPE_LIFT_BOX         CreateCommandRequest_Type = 2
	CreateCommandRequest_TYPE_DROP_BOX         CreateCommandRequest_Type = 3
)

// Enum value maps for CreateCommandRequest_Type.
var (
	CreateCommandRequest_Type_name = map[int32]string{
		0: "TYPE_UNSPECIFIED",
		1: "TYPE_MOVE_TO_LOCATION",
		2: "TYPE_LIFT_BOX",
		3: "TYPE_DROP_BOX",
	}
	CreateCommandRequest_Type_value = map[string]int32{
		"TYPE_UNSPECIFIED":      0,
		"TYPE_MOVE_TO_LOCATION": 1,
		"TYPE_LIFT_BOX":         2,
		"TYPE_DROP_BOX":         3,
	}
)

func (x CreateCommandRequest_Type) Enum() *CreateCommandRequest_Type {
	p := new(CreateCommandRequest_Type)
	*p = x
	return p
}

func (x CreateCommandRequest_Type) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CreateCommandRequest_Type) Descriptor() protoreflect.EnumDescriptor {
	return file_command_v1_command_proto_enumTypes[0].Descriptor()
}

func (CreateCommandRequest_Type) Type() protoreflect.EnumType {
	return &file_command_v1_command_proto_enumTypes[0]
}

func (x CreateCommandRequest_Type) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CreateCommandRequest_Type.Descriptor instead.
func (CreateCommandRequest_Type) EnumDescriptor() ([]byte, []int) {
	return file_command_v1_command_proto_rawDescGZIP(), []int{0, 0}
}

type CreateCommandRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type CreateCommandRequest_Type `protobuf:"varint,1,opt,name=type,proto3,enum=command.v1.CreateCommandRequest_Type" json:"type,omitempty"`
	// Types that are assignable to Payload:
	//
	//	*CreateCommandRequest_MoveToLocation
	//	*CreateCommandRequest_LiftBox
	//	*CreateCommandRequest_DropBox
	Payload isCreateCommandRequest_Payload `protobuf_oneof:"payload"`
}

func (x *CreateCommandRequest) Reset() {
	*x = CreateCommandRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_command_v1_command_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateCommandRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateCommandRequest) ProtoMessage() {}

func (x *CreateCommandRequest) ProtoReflect() protoreflect.Message {
	mi := &file_command_v1_command_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateCommandRequest.ProtoReflect.Descriptor instead.
func (*CreateCommandRequest) Descriptor() ([]byte, []int) {
	return file_command_v1_command_proto_rawDescGZIP(), []int{0}
}

func (x *CreateCommandRequest) GetType() CreateCommandRequest_Type {
	if x != nil {
		return x.Type
	}
	return CreateCommandRequest_TYPE_UNSPECIFIED
}

func (m *CreateCommandRequest) GetPayload() isCreateCommandRequest_Payload {
	if m != nil {
		return m.Payload
	}
	return nil
}

func (x *CreateCommandRequest) GetMoveToLocation() *MoveToLocationCommand {
	if x, ok := x.GetPayload().(*CreateCommandRequest_MoveToLocation); ok {
		return x.MoveToLocation
	}
	return nil
}

func (x *CreateCommandRequest) GetLiftBox() *LiftBoxCommand {
	if x, ok := x.GetPayload().(*CreateCommandRequest_LiftBox); ok {
		return x.LiftBox
	}
	return nil
}

func (x *CreateCommandRequest) GetDropBox() *DropBoxCommand {
	if x, ok := x.GetPayload().(*CreateCommandRequest_DropBox); ok {
		return x.DropBox
	}
	return nil
}

type isCreateCommandRequest_Payload interface {
	isCreateCommandRequest_Payload()
}

type CreateCommandRequest_MoveToLocation struct {
	MoveToLocation *MoveToLocationCommand `protobuf:"bytes,2,opt,name=move_to_location,json=moveToLocation,proto3,oneof"`
}

type CreateCommandRequest_LiftBox struct {
	LiftBox *LiftBoxCommand `protobuf:"bytes,3,opt,name=lift_box,json=liftBox,proto3,oneof"`
}

type CreateCommandRequest_DropBox struct {
	DropBox *DropBoxCommand `protobuf:"bytes,4,opt,name=drop_box,json=dropBox,proto3,oneof"`
}

func (*CreateCommandRequest_MoveToLocation) isCreateCommandRequest_Payload() {}

func (*CreateCommandRequest_LiftBox) isCreateCommandRequest_Payload() {}

func (*CreateCommandRequest_DropBox) isCreateCommandRequest_Payload() {}

type CreateCommandResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateCommandResponse) Reset() {
	*x = CreateCommandResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_command_v1_command_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateCommandResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateCommandResponse) ProtoMessage() {}

func (x *CreateCommandResponse) ProtoReflect() protoreflect.Message {
	mi := &file_command_v1_command_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateCommandResponse.ProtoReflect.Descriptor instead.
func (*CreateCommandResponse) Descriptor() ([]byte, []int) {
	return file_command_v1_command_proto_rawDescGZIP(), []int{1}
}

func (x *CreateCommandResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type MoveToLocationCommand struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Location string `protobuf:"bytes,1,opt,name=location,proto3" json:"location,omitempty"`
}

func (x *MoveToLocationCommand) Reset() {
	*x = MoveToLocationCommand{}
	if protoimpl.UnsafeEnabled {
		mi := &file_command_v1_command_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MoveToLocationCommand) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MoveToLocationCommand) ProtoMessage() {}

func (x *MoveToLocationCommand) ProtoReflect() protoreflect.Message {
	mi := &file_command_v1_command_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MoveToLocationCommand.ProtoReflect.Descriptor instead.
func (*MoveToLocationCommand) Descriptor() ([]byte, []int) {
	return file_command_v1_command_proto_rawDescGZIP(), []int{2}
}

func (x *MoveToLocationCommand) GetLocation() string {
	if x != nil {
		return x.Location
	}
	return ""
}

type LiftBoxCommand struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *LiftBoxCommand) Reset() {
	*x = LiftBoxCommand{}
	if protoimpl.UnsafeEnabled {
		mi := &file_command_v1_command_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LiftBoxCommand) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LiftBoxCommand) ProtoMessage() {}

func (x *LiftBoxCommand) ProtoReflect() protoreflect.Message {
	mi := &file_command_v1_command_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LiftBoxCommand.ProtoReflect.Descriptor instead.
func (*LiftBoxCommand) Descriptor() ([]byte, []int) {
	return file_command_v1_command_proto_rawDescGZIP(), []int{3}
}

type DropBoxCommand struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DropBoxCommand) Reset() {
	*x = DropBoxCommand{}
	if protoimpl.UnsafeEnabled {
		mi := &file_command_v1_command_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DropBoxCommand) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DropBoxCommand) ProtoMessage() {}

func (x *DropBoxCommand) ProtoReflect() protoreflect.Message {
	mi := &file_command_v1_command_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DropBoxCommand.ProtoReflect.Descriptor instead.
func (*DropBoxCommand) Descriptor() ([]byte, []int) {
	return file_command_v1_command_proto_rawDescGZIP(), []int{4}
}

var File_command_v1_command_proto protoreflect.FileDescriptor

var file_command_v1_command_proto_rawDesc = []byte{
	0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x63, 0x6f, 0x6d, 0x6d,
	0x61, 0x6e, 0x64, 0x2e, 0x76, 0x31, 0x22, 0xfc, 0x02, 0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x39, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x25, 0x2e,
	0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e,
	0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x4d, 0x0a, 0x10, 0x6d, 0x6f,
	0x76, 0x65, 0x5f, 0x74, 0x6f, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x76,
	0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x65, 0x54, 0x6f, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x48, 0x00, 0x52, 0x0e, 0x6d, 0x6f, 0x76, 0x65, 0x54,
	0x6f, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x37, 0x0a, 0x08, 0x6c, 0x69, 0x66,
	0x74, 0x5f, 0x62, 0x6f, 0x78, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x66, 0x74, 0x42, 0x6f, 0x78,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x48, 0x00, 0x52, 0x07, 0x6c, 0x69, 0x66, 0x74, 0x42,
	0x6f, 0x78, 0x12, 0x37, 0x0a, 0x08, 0x64, 0x72, 0x6f, 0x70, 0x5f, 0x62, 0x6f, 0x78, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x76,
	0x31, 0x2e, 0x44, 0x72, 0x6f, 0x70, 0x42, 0x6f, 0x78, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64,
	0x48, 0x00, 0x52, 0x07, 0x64, 0x72, 0x6f, 0x70, 0x42, 0x6f, 0x78, 0x22, 0x5d, 0x0a, 0x04, 0x54,
	0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x10, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x19, 0x0a, 0x15, 0x54, 0x59, 0x50,
	0x45, 0x5f, 0x4d, 0x4f, 0x56, 0x45, 0x5f, 0x54, 0x4f, 0x5f, 0x4c, 0x4f, 0x43, 0x41, 0x54, 0x49,
	0x4f, 0x4e, 0x10, 0x01, 0x12, 0x11, 0x0a, 0x0d, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4c, 0x49, 0x46,
	0x54, 0x5f, 0x42, 0x4f, 0x58, 0x10, 0x02, 0x12, 0x11, 0x0a, 0x0d, 0x54, 0x59, 0x50, 0x45, 0x5f,
	0x44, 0x52, 0x4f, 0x50, 0x5f, 0x42, 0x4f, 0x58, 0x10, 0x03, 0x42, 0x09, 0x0a, 0x07, 0x70, 0x61,
	0x79, 0x6c, 0x6f, 0x61, 0x64, 0x22, 0x27, 0x0a, 0x15, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43,
	0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x33,
	0x0a, 0x15, 0x4d, 0x6f, 0x76, 0x65, 0x54, 0x6f, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x22, 0x10, 0x0a, 0x0e, 0x4c, 0x69, 0x66, 0x74, 0x42, 0x6f, 0x78, 0x43, 0x6f,
	0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x22, 0x10, 0x0a, 0x0e, 0x44, 0x72, 0x6f, 0x70, 0x42, 0x6f, 0x78,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x32, 0x68, 0x0a, 0x0e, 0x43, 0x6f, 0x6d, 0x6d, 0x61,
	0x6e, 0x64, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x56, 0x0a, 0x0d, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x12, 0x20, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x6f,
	0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x42, 0x37, 0x5a, 0x35, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x74, 0x62, 0x65, 0x2d, 0x74, 0x65, 0x61, 0x6d, 0x2f, 0x72, 0x61, 0x79, 0x62, 0x6f, 0x74, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2f, 0x76, 0x31,
	0x3b, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_command_v1_command_proto_rawDescOnce sync.Once
	file_command_v1_command_proto_rawDescData = file_command_v1_command_proto_rawDesc
)

func file_command_v1_command_proto_rawDescGZIP() []byte {
	file_command_v1_command_proto_rawDescOnce.Do(func() {
		file_command_v1_command_proto_rawDescData = protoimpl.X.CompressGZIP(file_command_v1_command_proto_rawDescData)
	})
	return file_command_v1_command_proto_rawDescData
}

var file_command_v1_command_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_command_v1_command_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_command_v1_command_proto_goTypes = []interface{}{
	(CreateCommandRequest_Type)(0), // 0: command.v1.CreateCommandRequest.Type
	(*CreateCommandRequest)(nil),   // 1: command.v1.CreateCommandRequest
	(*CreateCommandResponse)(nil),  // 2: command.v1.CreateCommandResponse
	(*MoveToLocationCommand)(nil),  // 3: command.v1.MoveToLocationCommand
	(*LiftBoxCommand)(nil),         // 4: command.v1.LiftBoxCommand
	(*DropBoxCommand)(nil),         // 5: command.v1.DropBoxCommand
}
var file_command_v1_command_proto_depIdxs = []int32{
	0, // 0: command.v1.CreateCommandRequest.type:type_name -> command.v1.CreateCommandRequest.Type
	3, // 1: command.v1.CreateCommandRequest.move_to_location:type_name -> command.v1.MoveToLocationCommand
	4, // 2: command.v1.CreateCommandRequest.lift_box:type_name -> command.v1.LiftBoxCommand
	5, // 3: command.v1.CreateCommandRequest.drop_box:type_name -> command.v1.DropBoxCommand
	1, // 4: command.v1.CommandService.CreateCommand:input_type -> command.v1.CreateCommandRequest
	2, // 5: command.v1.CommandService.CreateCommand:output_type -> command.v1.CreateCommandResponse
	5, // [5:6] is the sub-list for method output_type
	4, // [4:5] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_command_v1_command_proto_init() }
func file_command_v1_command_proto_init() {
	if File_command_v1_command_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_command_v1_command_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateCommandRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_command_v1_command_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateCommandResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_command_v1_command_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MoveToLocationCommand); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_command_v1_command_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LiftBoxCommand); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_command_v1_command_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DropBoxCommand); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_command_v1_command_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*CreateCommandRequest_MoveToLocation)(nil),
		(*CreateCommandRequest_LiftBox)(nil),
		(*CreateCommandRequest_DropBox)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_command_v1_command_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_command_v1_command_proto_goTypes,
		DependencyIndexes: file_command_v1_command_proto_depIdxs,
		EnumInfos:         file_command_v1_command_proto_enumTypes,
		MessageInfos:      file_command_v1_command_proto_msgTypes,
	}.Build()
	File_command_v1_command_proto = out.File
	file_command_v1_command_proto_rawDesc = nil
	file_command_v1_command_proto_goTypes = nil
	file_command_v1_command_proto_depIdxs = nil
}
