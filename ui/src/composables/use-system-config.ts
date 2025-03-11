import type { SystemConfig } from '@/types/system-config'
import system from '@/api/system'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

const QUERY_KEY = 'systemConfig'

export function useQuerySystemConfig() {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => system.getSystemConfig(),
  })
}
export function useMutationSystemConfig() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (configData: SystemConfig) => system.updateSystemConfig(configData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
