import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export const systemConfigSchema = toTypedSchema(
  z.object({
    grpc: z.object({
      port: z.number().int().min(1).max(65535),
    }),
    http: z.object({
      port: z.number().int().min(0).max(65535),
      enableSwagger: z.boolean(),
    }),
    log: z.object({
      level: z.union([z.literal('debug'), z.literal('info'), z.literal('warn'), z.literal('error')]),
      format: z.union([z.literal('json'), z.literal('text')]),
      addSource: z.boolean(),
    }),
    pic: z.object({
      serial: z.object({
        port: z.string(),
        baudRate: z.number().int(),
        dataBits: z.number().int().min(5).max(8),
        stopBits: z.number().int().min(1).max(2),
        parity: z.union([z.literal('none'), z.literal('even'), z.literal('odd')]),
        readTimeout: z.number().min(0),
      }),
    }),
  }),
)
