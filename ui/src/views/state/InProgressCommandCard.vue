<script setup lang="ts">
import { BadgeCustom } from '@/components/shared'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useComandInProgress } from '@/composables/use-comand'
import { RaybotError } from '@/types/error'
import { AlertCircle } from 'lucide-vue-next'

interface Props {
  refetchInterval: number
}
const props = defineProps<Props>()
const { data: command, isError, error, isFetching } = useComandInProgress({ axiosOpts: { doNotShowLoading: true }, refetchInterval: props.refetchInterval })
</script>

<template>
  <Card class="mt-6">
    <CardHeader>
      <CardTitle>Command In Progress</CardTitle>
    </CardHeader>
    <CardContent>
      <div v-if="isError || isFetching">
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
      <div v-else-if="command" class="mx-auto space-x-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-3/12 text-center border-r">
                ID
              </TableHead>
              <TableHead class="w-2/12 text-center border-r">
                Type
              </TableHead>
              <TableHead class="w-1/12 text-center border-r">
                Source
              </TableHead>
              <TableHead class="text-center">
                Input
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="text-center border-r">
                {{ command?.id }}
              </TableCell>
              <TableCell class="text-center border-r">
                {{ command?.type }}
              </TableCell>
              <TableCell class="text-center border-r">
                <BadgeCustom :text="command?.source || ''" />
              </TableCell>
              <TableCell>
                <ul class="!pl-4 list-decimal list-inside">
                  <li v-for="(value, key) in command?.inputs" :key="key">
                    <span class="font-medium">{{ key }}:</span> {{ value }}
                  </li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
</template>
