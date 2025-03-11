type LogLevel = 'debug' | 'info' | 'warn' | 'error'
type SerialParity = 'none' | 'even' | 'odd'
type LogFormat = 'json' | 'text'

interface Grpc {
  port: number
}
interface Http {
  port: number
  enableSwagger: boolean
}
interface Log {
  level: LogLevel
  format: LogFormat
  addSource: boolean
}
interface Serial {
  port: string
  baudRate: number
  dataBits: number
  stopBits: number
  parity: SerialParity
  readTimeout: number
}
interface Pic {
  serial: Serial
}
export interface SystemConfig {
  grpc: Grpc
  http: Http
  log: Log
  pic: Pic
}
