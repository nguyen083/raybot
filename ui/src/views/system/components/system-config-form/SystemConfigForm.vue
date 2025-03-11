<!-- ConfigForm.vue -->
<script setup lang="ts">
import type { SystemConfig } from '@/types/system-config'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useMutationSystemConfig } from '@/composables/use-system-config'
import { HTTPError, RaybotError } from '@/types/error'
import GrpcCollapsible from '@/views/system/components/system-config-form/GrpcCollapsible.vue'
import HttpCollapsible from '@/views/system/components/system-config-form/HttpCollapsible.vue'
import LogCollapsible from '@/views/system/components/system-config-form/LogCollapsible.vue'
import PicCollapsible from '@/views/system/components/system-config-form/PicCollapsible.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { Loader } from 'lucide-vue-next'
import { push } from 'notivue'
import { useForm } from 'vee-validate'
import { systemConfigSchema } from './system-config-shema'

const props = defineProps({
  data: {
    type: Object as PropType<SystemConfig>,
    required: true,
  },
})

const systemConfigMutation = useMutationSystemConfig()

const form = useForm({
  validationSchema: toTypedSchema(systemConfigSchema),
  initialValues: toRaw(props.data),
})

watch(() => props.data, (data) => {
  form.setValues(toRaw(data))
})

const onSubmit = form.handleSubmit((values) => {
  systemConfigMutation.mutate(values, {
    onSuccess: () => {
      push.success({ message: 'Update successful', title: 'Success!' })
    },
    onError: (error) => {
      if (error instanceof RaybotError)
        push.error({ message: error.message, title: error.errorCode })
      else if (error instanceof HTTPError)
        push.error({ message: error.message, title: error.status.toString() })
      else
        push.error({ message: error.message, title: error.name })
    },
  })
})
</script>

<template>
  <form @submit="onSubmit">
    <CardHeader>
      <CardTitle>System config</CardTitle>
      <CardDescription>Adjust the robot parameters below</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <GrpcCollapsible />
      <HttpCollapsible />
      <LogCollapsible />
      <PicCollapsible />
    </CardContent>
    <CardFooter class="flex justify-end">
      <Button type="submit">
        <Loader v-if="systemConfigMutation.isPending.value" class="w-4 h-4 animate-spin" />
        Save
      </Button>
    </CardFooter>
  </form>
</template>
