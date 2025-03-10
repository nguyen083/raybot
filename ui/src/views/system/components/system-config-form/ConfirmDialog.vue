<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const emit = defineEmits(['confirm'])
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Confirm</DialogTitle>
        <DialogDescription>Confirm save changes</DialogDescription>
      </DialogHeader>
      <span>Do you want to save this changes?</span>
      <DialogFooter>
        <DialogClose>
          <Button @click="emit('confirm')">
            Confirm
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
