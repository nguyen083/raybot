<script setup lang="ts">
import type { RobotState } from '@/types/robot-state'
import BatteryTabContent from './BatteryTabContent.vue'
import CargoTabContent from './CargoTabContent.vue'
import DistanceSensorsTabContent from './DistanceSensorsTabContent.vue'
import MotorsTabContent from './MotorsTabContent.vue'

const props = defineProps<{
  robotState: RobotState
}>()

const activeTab = ref('battery')

const tabs = [
  { label: 'Battery', value: 'battery' },
  { label: 'Motors', value: 'motors' },
  { label: 'Sensors', value: 'sensors' },
  { label: 'Cargo', value: 'cargo' },
]
</script>

<template>
  <div class="w-full">
    <!-- Tab Navigation -->
    <div class="mb-4 border-b">
      <div class="flex flex-wrap -mb-px">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          class="px-4 py-2 text-sm font-medium"
          :class="activeTab === tab.value ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-gray-700'"
          @click="activeTab = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <BatteryTabContent
      v-if="activeTab === 'battery'"
      :battery="props.robotState.battery"
      :charge="props.robotState.charge"
      :discharge="props.robotState.discharge"
    />

    <MotorsTabContent
      v-if="activeTab === 'motors'"
      :lift-motor="props.robotState.liftMotor"
      :drive-motor="props.robotState.driveMotor"
      :cargo-door-motor="props.robotState.cargoDoorMotor"
    />

    <DistanceSensorsTabContent
      v-if="activeTab === 'sensors'"
      :distance-sensor="props.robotState.distanceSensor"
    />

    <CargoTabContent
      v-if="activeTab === 'cargo'"
      :cargo="props.robotState.cargo"
      :cargo-door-motor="props.robotState.cargoDoorMotor"
    />
  </div>
</template>
