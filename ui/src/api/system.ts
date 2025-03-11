import type { SystemConfig } from '@/types/system-config'
import http from '@/lib/http'

type SystemConfigParams = SystemConfig
const system = {
  getSystemConfig(): Promise<SystemConfig> {
    return http.get('/system/config')
  },
  updateSystemConfig(params: SystemConfigParams): Promise<SystemConfig> {
    return http.put('/system/config', params)
  },
}
export default system
