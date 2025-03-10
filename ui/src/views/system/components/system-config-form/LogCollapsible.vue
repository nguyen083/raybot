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
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(true)

const logLevelOption = [
  { label: 'Debug', value: 'debug' },
  { label: 'Info', value: 'info' },
  { label: 'Warn', value: 'warn' },
  { label: 'Error', value: 'error' },
]
const logFormatOption = [
  { label: 'JSON', value: 'json' },
  { label: 'Text', value: 'text' },
]
</script>

<template>
  <Collapsible v-model:open="isOpen" :unmount-on-hide="false">
    <Card class="rounded-sm">
      <CollapsibleTrigger class="w-full cursor-pointer">
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Log Configuration</CardTitle>
          <ChevronDown
            :size="24"
            :class="isOpen ? 'rotate-180' : ''"
          />
        </CardHeader>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="log.level">
              <FormItem>
                <FormLabel>Level</FormLabel>
                <Select
                  v-bind="componentField"
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select log level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="option in logLevelOption" :key="option.value" :value="option.value">
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
            <FormField v-slot="{ componentField }" name="log.format">
              <FormItem>
                <FormLabel>Log Format</FormLabel>
                <Select
                  v-bind="componentField"
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select log format" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="option in logFormatOption" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="flex items-center space-x-2">
            <FormField v-slot="{ value, handleChange }" name="log.addSource">
              <FormItem>
                <div class="flex items-center space-x-2">
                  <FormLabel>Add Source</FormLabel>
                  <FormControl>
                    <Switch
                      id="swagger"
                      class="!mt-0"
                      :model-value="value"
                      @update:model-value="handleChange"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </CardContent>
      </CollapsibleContent>
    </Card>
  </Collapsible>
</template>
