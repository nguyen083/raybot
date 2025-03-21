type CommandType = 'MOVE_TO_LOCATION'

type CommandStatus = 'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED'

type CommandSource = 'MANUAL' | 'CLOUD'

export type CommandInputs = CommandMoveToLocationInputs

interface CommandMoveToLocationInputs {
  Location: string
}

export interface Command {
  id: string
  type: CommandType
  status: CommandStatus
  source: CommandSource
  inputs: Record<string, unknown>
  error?: string | null
  createdAt: string
  completedAt?: string | null
}
