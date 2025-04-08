<script setup lang="ts">
import type { RobotState } from '@/types/robot-state'
import BatteryCard from './BatteryCard.vue'
import ConnectionsCard from './ConnectionsCard.vue'
import LocationCard from './LocationCard.vue'
import MotorsCard from './MotorsCard.vue'

const props = defineProps<{
  robotState: RobotState
}>()

// const getPortsConnected = computed(() => {
//   let count = 0
//   if (props.robotState.connections.uart.pic)
//     count++
//   if (props.robotState.connections.uart.esp)
//     count++
//   if (props.robotState.connections.usb.rfid)
//     count++
//   return count
// })

// const getTotalPorts = computed(() => {
//   return 3 // 2 UART + 1 USB
// })
</script>

<template>
  <div class="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
    <BatteryCard
      :battery="props.robotState.battery"
    />
    <MotorsCard
      :lift-motor="props.robotState.liftMotor"
      :drive-motor="props.robotState.driveMotor"
      :cargo-door-motor="props.robotState.cargoDoorMotor"
    />

    <!-- Location Card -->
    <LocationCard
      :location="props.robotState.location"
    />

    <!-- Connections Card -->
    <!-- <ConnectionsCard
      :connections="robotState.connections"
      :ports-connected="getPortsConnected"
      :total-ports="getTotalPorts"
    /> -->
  </div>
</template>
