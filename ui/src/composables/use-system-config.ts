import type { ConfigJSON } from '@/api/config'
import config from '@/api/config'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import nProgress from 'nprogress'

const QUERY_KEY = 'systemConfig'

export function useQuerySystemConfig() {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => {
      nProgress.start()
      const result = config.get()
      nProgress.done()
      return result
    },
  })
}
export function useMutationSystemConfig() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (configData: ConfigJSON) => {
      try {
        nProgress.start()
        const updatedConfig = await config.set(configData)
        return updatedConfig
      }
      finally {
        nProgress.done()
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })

  return mutation
}
