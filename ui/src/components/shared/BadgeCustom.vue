<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { CheckCheck, CircleX, Cloud, Hand, Loader } from 'lucide-vue-next'

interface Props {
  text: 'MANUAL' | 'CLOUD' | 'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED' | string
}
const props = defineProps<Props>()

function underscoreToSpace(text: string): string {
  return text.replace(/_/g, ' ')
}
function formatText(text: string): string {
  return underscoreToSpace(text).toLowerCase()
}
const formattedText = computed(() => formatText(props.text))
</script>

<template>
  <div class="pointer-events-none">
    <Badge
      v-if="props.text === 'MANUAL'"
      class="!rounded-full text-green-600 bg-green-200 py-px px-2 capitalize gap-1"
    >
      <Hand class="h-3 w-fit" />
      {{ formattedText }}
    </Badge>
    <Badge
      v-else-if="props.text === 'CLOUD'"
      class="!rounded-full text-blue-600 bg-blue-200 py-px px-2 capitalize gap-1"
    >
      <Cloud class="h-3 w-fit" />
      {{ formattedText }}
    </Badge>
    <Badge
      v-else-if="props.text === 'IN_PROGRESS'"
      class="!rounded-full text-blue-600 bg-blue-200 py-px px-2 capitalize gap-1"
    >
      <Loader class="h-3 w-fit" />
      {{ formattedText }}
    </Badge>
    <Badge
      v-else-if="props.text === 'SUCCEEDED'"
      class="!rounded-full text-green-600 bg-green-200 py-px px-2 capitalize gap-1"
    >
      <CheckCheck class="h-3 w-fit" />
      {{ formattedText }}
    </Badge>
    <Badge
      v-else-if="props.text === 'FAILED'"
      class="!rounded-full text-red-600 bg-red-200 py-px px-2 capitalize gap-1"
    >
      <CircleX class="h-3 w-fit" />
      {{ formattedText }}
    </Badge>
    <Badge
      v-else
      class="!rounded-full text-gray-600 bg-gray-200 py-px px-2 capitalize gap-1"
    >
      {{ formattedText }}
    </Badge>
  </div>
</template>
