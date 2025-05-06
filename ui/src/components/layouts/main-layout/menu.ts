import type { Item } from './Navigation.vue'
import {
  ChartBarBig,
  Command,
  FileText,
  LayoutList,
  Power,
  Settings2,
} from 'lucide-vue-next'

export const menus: Item[] = [
  {
    title: 'State',
    path: '/state',
    icon: ChartBarBig,
  },
  {
    title: 'Command queue',
    path: '/command-queue',
    icon: LayoutList,
  },
  {
    title: 'Commands history',
    path: '/command-history',
    icon: Command,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: Settings2,
  },
  {
    title: 'Logging',
    path: '/logging',
    icon: FileText,
  },
  {
    title: 'Reboot',
    path: '/reboot',
    icon: Power,
  },
]

export { menus as routes }
