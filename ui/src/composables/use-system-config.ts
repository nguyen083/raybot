import type { SystemConfig } from '@/types/system-config'
import system from '@/api/system'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

const QUERY_KEY = 'systemConfig'

export function useQuerySystemConfig() {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => {
      const result = system.getSystemConfig()
      return result
    },
  })
}
export function useMutationSystemConfig() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (configData: SystemConfig) => {
      const updatedConfig = system.updateSystemConfig(configData)
      return updatedConfig
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })
}
