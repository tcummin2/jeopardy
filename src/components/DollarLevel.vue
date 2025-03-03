<template>
  <td class="border border-slate-700 bg-[#071278]">
    <RouterLink :to="`/clue/${clue.id}`" class="text-[#d69f4c] text-6xl scale-x-300 font-bold font-category shadow-[0_35px_35px_rgba(0,0,0,1 )]">
      ${{ clue.dollarAmount }}
    </RouterLink>
  </td>
</template>

<script setup lang="ts">
import type { Clue } from '@/types/common'

defineProps<{
  clue: Clue
}>()
</script>

<style lang="scss" scoped>
a {
  text-shadow: 5px 5px black;
}
</style>
