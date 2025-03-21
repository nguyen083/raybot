import type { SortPrefix } from '@/lib/sort'
import type { Command } from '@/types/command'
import type { Paging } from '@/types/paging'
import type { AxiosRequestConfig } from 'axios'
import http from '@/lib/http'

export type CommandSort = 'type' | 'status' | 'source' | 'createdAt' | 'completedAt'
export const commandSortValues: CommandSort[] = ['type', 'status', 'source', 'createdAt', 'completedAt']
export interface CommandParams {
  page?: number
  pageSize?: number
  sorts?: SortPrefix<CommandSort>[]
}
const command = {
  getCommandInProgress: (opt?: AxiosRequestConfig): Promise<Command> => {
    return http.get('/commands/in-progress', opt)
  },
  getCommand: (p: CommandParams): Promise<Paging<Command>> => {
    const query = new URLSearchParams({
      page: p.page?.toString() || '1',
      pageSize: p.pageSize?.toString() || '10',
      sorts: p.sorts?.join(',') || '',
    })
    return http.get(`/commands?${query}`)
  },
}
export default command
