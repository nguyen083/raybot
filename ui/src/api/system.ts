import type { SystemConfig } from '@/types/system-config'
import http from '@/lib/http'

const system = {
  getSystemConfig(): Promise<SystemConfig> {
    return http.get('/system/config')
  },
  updateSystemConfig(param: SystemConfig): Promise<SystemConfig> {
    return http.put('/system/config', param)
  },
}
export default system
