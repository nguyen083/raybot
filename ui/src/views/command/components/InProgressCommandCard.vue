<script setup lang="ts">
import { BadgeCustom } from '@/components/shared'
import { Badge } from '@/components/ui/badge'
import { useComandInProgress } from '@/composables/use-comand'
import { formatDate } from '@/lib/date'
import { RaybotError } from '@/types/error'
import { AlertCircle, Loader } from 'lucide-vue-next'

interface Props {
  refetchInterval: number
}
const props = defineProps<Props>()
const { data: command, isError, error } = useComandInProgress({ axiosOpts: { doNotShowLoading: true }, refetchInterval: props.refetchInterval })
</script>

<template>
  <div class="p-6 border rounded-md">
    <div v-if="isError">
      <div v-if="error instanceof RaybotError " class="flex flex-col items-center justify-center gap-4">
        <div class="flex flex-col items-center gap-4">
          <AlertCircle class="w-8 h-8 text-muted-foreground" />
          <div class="space-y-2 text-center">
            <h2 class="text-lg font-semibold">
              No command in progress
            </h2>
            <p class="text-sm text-muted-foreground">
              The robot is not currently executing any command.
            </p>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col items-center justify-center gap-4">
        <div class="flex flex-col items-center gap-4 text-destructive">
          <AlertCircle class="w-8 h-8" />
          <div class="space-y-2 text-center">
            <h2 class="text-lg font-semibold">
              Failed to load command
            </h2>
            <p class="text-sm text-muted-foreground">
              {{ error?.message || 'An unexpected error occurred' }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="command" class="grid grid-cols-2">
      <div class="flex flex-col gap-2">
        <Badge
          class="!rounded-full text-blue-600 bg-blue-200 capitalize gap-1 w-fit pointer-events-none"
        >
          <Loader class="h-3 w-fit animate-spin" />
          In progress
        </Badge>
        <div class="flex gap-24">
          <span class="text-sm">ID: {{ command.id }}</span>
        </div>
        <span>{{ command.type }}</span>

        <span class="flex gap-2"><BadgeCustom :text="command.source" /></span>
        <span class="text-sm text-muted-foreground">Created at: {{ formatDate(command.createdAt) }}</span>
      </div>
      <span class="flex gap-2">Inputs:
        <pre class="flex-1 p-2 text-sm bg-gray-200 rounded-sm dark:bg-black">{{ JSON.stringify(command.inputs, null, 2) }}</pre>
      </span>
    </div>
  </div>
</template>
