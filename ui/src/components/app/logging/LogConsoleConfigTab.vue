<script setup lang="ts">
import type { LogConsoleConfig } from '@/types/config'
import { Loader } from 'lucide-vue-next'
import LogConsoleConfigForm from './LogConsoleConfigForm.vue'

interface Props {
  initialValues: LogConsoleConfig
  isPending: boolean
  isMutating: boolean
}
const props = defineProps<Props>()
defineEmits(['updateLogConsoleConfig'])
</script>

<template>
  <div v-if="props.isPending" class="flex items-center justify-center h-full">
    <Loader class="w-4 h-4 animate-spin" />
  </div>
  <LogConsoleConfigForm v-if="!props.isPending" :initial-values="props.initialValues" :is-mutating="props.isMutating" @update-log-console-config="$emit('updateLogConsoleConfig', $event)" />
</template>
