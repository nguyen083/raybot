<script setup lang="ts">
import type { LogConsoleConfig } from '@/types/config'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { toTypedSchema } from '@vee-validate/zod'
import { Loader } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { z } from 'zod'

interface Props {
  initialValues: LogConsoleConfig
  isMutating: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['updateLogConsoleConfig'])

const logConsoleConfigSchema = z.object({
  enable: z.boolean(),
  level: z.union([z.literal('DEBUG'), z.literal('INFO'), z.literal('WARN'), z.literal('ERROR')]),
  format: z.union([z.literal('JSON'), z.literal('TEXT')]),
})

const form = useForm({
  validationSchema: toTypedSchema(logConsoleConfigSchema),
  initialValues: props.initialValues,
})

const onSubmit = form.handleSubmit((values) => {
  emit('updateLogConsoleConfig', values)
})
</script>

<template>
  <form class="flex flex-col w-full max-w-lg space-y-6" @submit="onSubmit">
    <FormField v-slot="{ value, handleChange }" name="enable">
      <FormItem class="flex flex-row items-center justify-between p-4 border rounded-lg">
        <div class="space-y-0.5">
          <FormLabel>Enable Log Handler</FormLabel>
        </div>
        <FormControl>
          <Switch
            :model-value="value"
            :disabled="props.isMutating"
            aria-readonly
            @update:model-value="handleChange"
          />
        </FormControl>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="level">
      <FormItem>
        <FormLabel>Log Level</FormLabel>
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger :disabled="props.isMutating">
              <SelectValue placeholder="Select log level" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="DEBUG">
              Debug
            </SelectItem>
            <SelectItem value="INFO">
              Info
            </SelectItem>
            <SelectItem value="WARN">
              Warning
            </SelectItem>
            <SelectItem value="ERROR">
              Error
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="format">
      <FormItem>
        <FormLabel>Log Formatter</FormLabel>
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger :disabled="props.isMutating">
              <SelectValue placeholder="Select log format" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="JSON">
              JSON
            </SelectItem>
            <SelectItem value="TEXT">
              Text
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>

    <div>
      <Button type="submit" :disabled="props.isMutating">
        <Loader v-if="props.isMutating" class="w-4 h-4 mr-2 animate-spin" />
        Save
      </Button>
    </div>
  </form>
</template>
