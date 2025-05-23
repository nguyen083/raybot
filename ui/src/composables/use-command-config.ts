import type { CommandConfig } from '@/types/command-config'
import { useLocalStorage } from '@vueuse/core'

const STORAGE_KEY = 'command-config'
const DEFAULT_COMMAND_CONFIG: CommandConfig = {
  moveTo: {
    motorSpeed: 80,
  },
  moveForward: {
    motorSpeed: 80,
  },
  moveBackward: {
    motorSpeed: 80,
  },
  cargoOpen: {
    motorSpeed: 80,
  },
  cargoClose: {
    motorSpeed: 80,
  },
  cargoLift: {
    motorSpeed: 80,
    position: 10,
  },
  cargoLower: {
    motorSpeed: 80,
    bottomObstacleTracking: {
      enterDistance: 10,
      exitDistance: 10,
    },
    position: 200,
  },
}
export function useCommandConfig() {
  const state = useLocalStorage<CommandConfig>(STORAGE_KEY, DEFAULT_COMMAND_CONFIG)

  const commandConfig = computed(() => state.value)

  function updateCommandConfig(commandConfig: CommandConfig) {
    state.value = commandConfig
  }

  return {
    commandConfig,
    updateCommandConfig,
  }
}
