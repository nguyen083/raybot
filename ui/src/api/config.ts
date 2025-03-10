import http from '@/lib/http'

export interface ConfigJSON {
  grpc: {
    port: number
  }
  http: {
    port: number
    enableSwagger: boolean
  }
  log: {
    level: 'debug' | 'info' | 'warn' | 'error' // Giả định các mức log phổ biến
    format: 'json' | 'text' // Giả định các format có thể có
    addSource: boolean
  }
  pic: {
    serial: {
      port: string
      baudRate: number
      dataBits: number
      stopBits: number
      parity: 'none' | 'even' | 'odd' // Giả định các giá trị parity phổ biến
      readTimeout: number
    }
  }
}
const config = {
  get(): Promise<ConfigJSON> {
    return http.get('/system/config')
  },
  set(param: ConfigJSON): Promise<ConfigJSON> {
    return http.put('/system/config', param)
  },
}
export default config
