<template>
  <th class="border border-slate-700 bg-[#071278] text-white font-category text-[36px] uppercase">
    {{ category.name }}
  </th>
</template>

<script setup lang="ts">
import { type Category } from '@/types/common'

defineProps<{
  category: Category
}>()
</script>
