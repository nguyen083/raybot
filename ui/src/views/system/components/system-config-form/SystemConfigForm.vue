<!-- ConfigForm.vue -->
<script setup lang="ts">
import type { ConfigJSON } from '@/api/config'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useMutationSystemConfig } from '@/composables/use-system-config'
import { systemConfigSchema } from '@/schemas/system-config'
import GrpcCollapsible from '@/views/system/components/system-config-form/GrpcCollapsible.vue'
import HttpCollapsible from '@/views/system/components/system-config-form/HttpCollapsible.vue'
import LogCollapsible from '@/views/system/components/system-config-form/LogCollapsible.vue'
import PicCollapsible from '@/views/system/components/system-config-form/PicCollapsible.vue'
import { push } from 'notivue'
import { useForm } from 'vee-validate'
import ConfirmDialog from './ConfirmDialog.vue'

const props = defineProps({
  data: {
    type: Object as PropType<ConfigJSON>,
    required: true,
  },
})
const systemConfigMutation = useMutationSystemConfig()
const form = useForm({
  validationSchema: systemConfigSchema,
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
      console.error(error)
    },
  })
})
</script>

<template>
  <form>
    <CardHeader>
      <CardTitle>System config</CardTitle>
      <CardDescription>Adjust the robot parameters below</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <!-- grpc config -->
      <GrpcCollapsible />
      <!-- http config -->
      <HttpCollapsible />
      <!-- log config -->
      <LogCollapsible />
      <!-- pic config -->
      <PicCollapsible />
    </CardContent>
    <CardFooter class="flex justify-end">
      <ConfirmDialog @confirm="onSubmit">
        <Button type="button">
          Save
        </Button>
      </ConfirmDialog>
    </CardFooter>
  </form>
</template>
