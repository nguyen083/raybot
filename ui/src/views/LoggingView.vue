<script setup lang="ts">
import type { LogConsoleConfig, LogFileConfig } from '@/types/config'
import LogConsoleConfigTab from '@/components/app/logging/LogConsoleConfigTab.vue'
import LogFileConfigTab from '@/components/app/logging/LogFileConfigTab.vue'
import PageContainer from '@/components/shared/PageContainer.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LOG_CONFIG_QUERY_KEY, useLogConfigMutation, useLogConfigQuery } from '@/composables/use-config'
import { useQueryClient } from '@tanstack/vue-query'

const route = useRoute()
const router = useRouter()
const tab = route.query.tab as string | undefined ?? 'console'
const queryClient = useQueryClient()
function handleTabChange(value: string | number) {
  router.replace({ query: { tab: value } })
}

const { data: logConfig, isPending } = useLogConfigQuery()
const { mutate, isPending: isMutating } = useLogConfigMutation()

function handleLogConsoleConfigUpdate(values: LogConsoleConfig) {
  console.log('values', values)
  if (logConfig.value) {
    mutate({
      file: logConfig.value?.file,
      console: values,
    }, {
      onSuccess: () => {
        queryClient.setQueryData([LOG_CONFIG_QUERY_KEY], {
          file: logConfig.value?.file,
          console: values,
        })
        notification.success('Log configuration updated successfully!')
      },
      onError: () => {
        notification.error('Failed to update log configuration')
      },
    })
  }
}

function handleLogFileConfigUpdate(values: LogFileConfig) {
  if (logConfig.value) {
    mutate({
      file: values,
      console: logConfig.value?.console,
    }, {
      onSuccess: () => {
        queryClient.setQueryData([LOG_CONFIG_QUERY_KEY], {
          file: values,
          console: logConfig.value?.console,
        })
        notification.success('Log configuration updated successfully!')
      },
      onError: () => {
        notification.error('Failed to update log configuration')
      },
    })
  }
}
</script>

<template>
  <PageContainer>
    <div>
      <h1 class="text-xl font-semibold tracking-tight">
        Logging
      </h1>
      <p class="text-sm text-muted-foreground">
        View logs for troubleshooting and system performance optimization
        <RouterLink to="/restart" class="text-blue-500">
          (Restart to apply changes)
        </RouterLink>
      </p>
    </div>
    <Tabs :default-value="tab" @update:model-value="handleTabChange">
      <TabsList>
        <TabsTrigger value="console">
          Console Log
        </TabsTrigger>
        <TabsTrigger value="file">
          File Log
        </TabsTrigger>
      </TabsList>

      <TabsContent value="console">
        <LogConsoleConfigTab v-if="logConfig?.console" :initial-values="logConfig.console" :is-pending="isPending" :is-mutating="isMutating" @update-log-console-config="handleLogConsoleConfigUpdate" />
      </TabsContent>
      <TabsContent value="file">
        <LogFileConfigTab v-if="logConfig?.file" :initial-values="logConfig.file" :is-pending="isPending" :is-mutating="isMutating" @update-log-file-config="handleLogFileConfigUpdate" />
      </TabsContent>
    </Tabs>
  </PageContainer>
</template>
