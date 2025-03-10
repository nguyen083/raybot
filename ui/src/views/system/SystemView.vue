<script setup lang="ts">
import { useQuerySystemConfig } from '@/composables/use-system-config'
import { SystemConfigForm } from '@/views/system/components/system-config-form'

const { isPending, data, isError } = useQuerySystemConfig()
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <div v-if="isPending" class="text-2xl">
      Loading...
    </div>
    <div v-else-if="isError" class="text-2xl">
      Error
    </div>
    <div v-else-if="!data" class="text-2xl">
      No data
    </div>
    <div v-else class="flex justify-center w-full">
      <SystemConfigForm class="w-2/3" :data="data" />
    </div>
  </div>
</template>
