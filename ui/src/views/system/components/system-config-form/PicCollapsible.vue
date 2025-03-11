<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(true)

const picSerialParityOption = [
  { label: 'None', value: 'none' },
  { label: 'Even', value: 'even' },
  { label: 'Odd', value: 'odd' },
]

const dataBitsOption = [
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
]
const stopBitsOption = [
  { label: '1', value: 1 },
  { label: '1.5', value: 1.5 },
  { label: '2', value: 2 },
]
</script>

<template>
  <Collapsible v-model:open="isOpen" :unmount-on-hide="false">
    <Card class="rounded-sm">
      <CollapsibleTrigger class="w-full cursor-pointer">
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>PIC Configuration</CardTitle>
          <ChevronDown
            :size="24"
            :class="isOpen ? 'rotate-180' : ''"
          />
        </CardHeader>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="pic.serial.port">
              <FormItem>
                <FormLabel>Port</FormLabel>
                <FormControl>
                  <Input
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="pic.serial.baudRate">
              <FormItem>
                <FormLabel>Baud Rate</FormLabel>
                <FormControl>
                  <Input
                    v-bind="componentField"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="pic.serial.dataBits">
              <FormItem>
                <FormLabel>Data Bits</FormLabel>
                <Select
                  v-bind="componentField"
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select data bits" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="option in dataBitsOption" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="pic.serial.stopBits">
              <FormItem>
                <FormLabel>Stop Bits</FormLabel>
                <Select
                  v-bind="componentField"
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stop bits" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="option in stopBitsOption" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="pic.serial.parity">
              <FormItem>
                <FormLabel>Parity</FormLabel>
                <Select
                  v-bind="componentField"
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select parity" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="option in picSerialParityOption" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="pic.serial.readTimeout">
              <FormItem>
                <FormLabel>Read Timeout</FormLabel>
                <FormControl>
                  <Input
                    v-bind="componentField"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </CardContent>
      </CollapsibleContent>
    </Card>
  </Collapsible>
</template>
