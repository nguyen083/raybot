<script setup lang="ts">
import type { ConnectionsState } from '@/types'

defineProps<{
  connections: ConnectionsState
  portsConnected: number
  totalPorts: number
}>()
</script>

<template>
  <div class="p-4 border rounded-lg shadow-sm">
    <div class="pb-2">
      <div class="flex items-center gap-2 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
        Connections
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <div class="text-sm">
          Cloud
        </div>
        <span class="flex items-center">
          <span
            class="inline-block w-2 h-2 mr-1 rounded-full"
            :class="connections.cloud ? 'bg-green-500' : 'bg-red-500'"
          />
          <span class="text-xs">{{ connections.cloud ? 'Online' : 'Offline' }}</span>
        </span>
      </div>
      <div class="flex items-center justify-between mt-1">
        <div class="text-sm">
          Network
        </div>
        <span class="flex items-center">
          <span
            class="inline-block w-2 h-2 mr-1 rounded-full"
            :class="connections.network.connected ? 'bg-green-500' : 'bg-red-500'"
          />
          <span class="text-xs">{{ connections.network.strength }}%</span>
        </span>
      </div>
      <div class="flex items-center justify-between mt-1">
        <div class="text-sm">
          Ports
        </div>
        <span class="flex items-center">
          <span
            class="inline-block w-2 h-2 mr-1 rounded-full"
            :class="portsConnected === totalPorts ? 'bg-green-500' : 'bg-amber-500'"
          />
          <span class="text-xs">{{ portsConnected }}/{{ totalPorts }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
