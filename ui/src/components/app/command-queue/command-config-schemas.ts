import { z } from 'zod'

const bottomObstacleTrackingSchema = z.object({
  enterDistance: z.number().min(0),
  exitDistance: z.number().min(0),
})

export const commandConfigSchema = z.object({
  moveTo: z.object({
    motorSpeed: z.number().min(0).max(100),
  }),
  moveForward: z.object({
    motorSpeed: z.number().min(0).max(100),
  }),
  moveBackward: z.object({
    motorSpeed: z.number().min(0).max(100),
  }),
  cargoOpen: z.object({
    motorSpeed: z.number().min(0).max(100),
  }),
  cargoClose: z.object({
    motorSpeed: z.number().min(0).max(100),
  }),
  cargoLift: z.object({
    motorSpeed: z.number().min(0).max(100),
    position: z.number().min(0),
  }),
  cargoLower: z.object({
    motorSpeed: z.number().min(0).max(100),
    bottomObstacleTracking: bottomObstacleTrackingSchema,
    position: z.number().min(0),
  }),
})
