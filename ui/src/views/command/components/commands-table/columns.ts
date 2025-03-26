import type { Command } from '@/types/command'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTableSortableHeader from '@/components/shared/DataTableSortableHeader.vue'
import { formatDate } from '@/lib/date'
import { h } from 'vue'
import SourceBadge from './SourceBadge.vue'
import StatusBadge from './StatusBadge.vue'

export const columns: ColumnDef<Command>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'ID' }),
    enableSorting: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'Type' }),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'Status' }),
    cell: ({ row }) => h(StatusBadge, { key: row.original.id + row.original.status, status: row.original.status }),
  },
  {
    accessorKey: 'source',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'Source' }),
    cell: ({ row }) => h(SourceBadge, { key: row.original.id + row.original.source, source: row.original.source }),
  },
  {
    accessorKey: 'inputs',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'Inputs' }),
    cell: ({ row }) => {
      const inputs = row.original.inputs
      return h('pre', {
        class: 'text-xs overflow-auto max-h-32 whitespace-pre-wrap',
        style: 'max-width: 300px;',
      }, JSON.stringify(inputs, null, 2))
    },
    enableSorting: false,
  },
  {
    accessorKey: 'error',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'Error' }),
    cell: ({ row }) => {
      const error = row.original.error
      return error || '-'
    },
    enableSorting: false,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'Created At' }),
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    accessorKey: 'completedAt',
    header: ({ column }) => h(DataTableSortableHeader<Command>, { column, title: 'Completed At' }),
    cell: ({ row }) => {
      const completedAt = row.original.completedAt
      return completedAt ? formatDate(completedAt) : '-'
    },
  },
]
