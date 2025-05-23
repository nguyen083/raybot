<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { commandConfigSchema } from '@/components/app/command-queue/command-config-schemas'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useCommandConfig } from '@/composables/use-command-config'

const isOpen = defineModel<boolean>('isOpen', { required: true })
const { commandConfig, updateCommandConfig } = useCommandConfig()

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(commandConfigSchema),
  initialValues: commandConfig.value,
})

const onSubmit = handleSubmit((values) => {
  updateCommandConfig(values)
  notification.success('Command config updated')
  isOpen.value = false
})

watch(isOpen, (value) => {
  if (value) {
    resetForm({
      values: commandConfig.value,
    })
  }
})
</script>

<template>
  <Sheet v-model:open="isOpen">
    <SheetContent class="max-h-screen overflow-y-auto sm:max-w-xl">
      <SheetHeader>
        <SheetTitle>
          Command config
        </SheetTitle>
        <SheetDescription>
          Configure value of input for each command
        </SheetDescription>
      </SheetHeader>

      <form class="mt-6 space-y-4" @submit="onSubmit">
        <!-- Move To -->
        <div class="space-y-1">
          <h3 class="font-medium">
            Move To
          </h3>
          <FormField v-slot="{ componentField }" name="moveTo.motorSpeed">
            <FormItem>
              <FormLabel>Motor Speed</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Move Forward -->
        <div class="space-y-1">
          <h3 class="font-medium">
            Move Forward
          </h3>
          <FormField v-slot="{ componentField }" name="moveForward.motorSpeed">
            <FormItem>
              <FormLabel>Motor Speed</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Move Backward -->
        <div class="space-y-1">
          <h3 class="font-medium">
            Move Backward
          </h3>
          <FormField v-slot="{ componentField }" name="moveBackward.motorSpeed">
            <FormItem>
              <FormLabel>Motor Speed</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Cargo Open -->
        <div class="space-y-1">
          <h3 class="font-medium">
            Cargo Open
          </h3>
          <FormField v-slot="{ componentField }" name="cargoOpen.motorSpeed">
            <FormItem>
              <FormLabel>Motor Speed</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Cargo Close -->
        <div class="space-y-1">
          <h3 class="font-medium">
            Cargo Close
          </h3>
          <FormField v-slot="{ componentField }" name="cargoClose.motorSpeed">
            <FormItem>
              <FormLabel>Motor Speed</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Cargo Lift -->
        <div class="space-y-1">
          <h3 class="font-medium">
            Cargo Lift
          </h3>
          <FormField v-slot="{ componentField }" name="cargoLift.motorSpeed">
            <FormItem>
              <FormLabel>Motor Speed</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="cargoLift.position">
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Cargo Lower -->
        <div class="space-y-4">
          <h3 class="font-medium">
            Cargo Lower
          </h3>
          <FormField v-slot="{ componentField }" name="cargoLower.motorSpeed">
            <FormItem>
              <FormLabel>Motor Speed</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="cargoLower.position">
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="cargoLower.bottomObstacleTracking.enterDistance">
            <FormItem>
              <FormLabel>Enter Distance</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="cargoLower.bottomObstacleTracking.exitDistance">
            <FormItem>
              <FormLabel>Exit Distance</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Thêm các trường khác tương tự -->

        <Button type="submit">
          Save Changes
        </Button>
      </form>
    </SheetContent>
  </Sheet>
</template>
