<script setup lang="ts">
import type { LogFileConfig } from '@/types/config'
import { Loader } from 'lucide-vue-next'
import LogFileConfigForm from './LogFileConfigForm.vue'

interface Props {
  initialValues: LogFileConfig
  isPending: boolean
  isMutating: boolean
}
const props = defineProps<Props>()
defineEmits(['updateLogFileConfig'])
</script>

<template>
  <div v-if="isPending" class="flex items-center justify-center h-full">
    <Loader class="w-4 h-4 animate-spin" />
  </div>
  <LogFileConfigForm
    v-if="!props.isPending"
    :initial-values="props.initialValues"
    :is-mutating="props.isMutating"
    @update-log-file-config="$emit('updateLogFileConfig', $event)"
  />
</template>
