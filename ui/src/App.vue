<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useColorMode } from '@vueuse/core'
import { Notification, Notivue } from 'notivue'

useColorMode()
</script>

<template>
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
  <VueQueryDevtools />
  <RouterView />
</template>
