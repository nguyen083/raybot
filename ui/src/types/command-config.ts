import type { CargoCloseInputs, CargoLiftInputs, CargoLowerInputs, CargoOpenInputs, MoveBackwardInputs, MoveForwardInputs, MoveToInputs } from './command'

export interface CommandConfig {
  moveTo: Omit<MoveToInputs, 'direction' | 'location'>
  moveForward: MoveForwardInputs
  moveBackward: MoveBackwardInputs
  cargoOpen: CargoOpenInputs
  cargoClose: CargoCloseInputs
  cargoLift: CargoLiftInputs
  cargoLower: CargoLowerInputs
}
