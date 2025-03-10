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
import { ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(true)
</script>

<template>
  <Collapsible v-model:open="isOpen" :unmount-on-hide="false">
    <Card class="rounded-sm">
      <CollapsibleTrigger class="w-full cursor-pointer">
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>GRPC Configuration</CardTitle>
          <ChevronDown
            :size="24"
            :class="isOpen ? 'rotate-180' : ''"
          />
        </CardHeader>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <FormField v-slot="{ componentField }" name="grpc.port">
              <FormItem>
                <FormLabel>Port</FormLabel>
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
