<template>
  <table class="grow border-collapse border border-slate-500 text-center">
    <thead>
      <tr>
        <CategoryTitle
          v-for="category in categories"
          :key="category.name"
          :category="category"
        />
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in rows" :key="i">
        <DollarLevel
          v-for="clue in row"
          :key="clue.dollarAmount"
          :clue="clue"
        />
      </tr>
    </tbody>
  </table>
  <RouterView />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CategoryTitle from './CategoryTitle.vue'
import DollarLevel from './DollarLevel.vue'
import type { Category } from '@/types/common'

const categories: Category[] = [{
  name: 'Category 1',
  clues: [
    { id: 1, dollarAmount: 100 },
    { id: 2, dollarAmount: 200 },
    { id: 3, dollarAmount: 300 },
    { id: 4, dollarAmount: 400 },
    { id: 5, dollarAmount: 500 }
  ]
}, {
  name: 'Category 2',
  clues: [
    { id: 1, dollarAmount: 100 },
    { id: 2, dollarAmount: 200 },
    { id: 3, dollarAmount: 300 },
    { id: 4, dollarAmount: 400 },
    { id: 5, dollarAmount: 500 }
  ]
}, {
  name: 'Category 3',
  clues: [
    { id: 1, dollarAmount: 100 },
    { id: 2, dollarAmount: 200 },
    { id: 3, dollarAmount: 300 },
    { id: 4, dollarAmount: 400 },
    { id: 5, dollarAmount: 500 }
  ]
}, {
  name: 'Category 4',
  clues: [
    { id: 1, dollarAmount: 100 },
    { id: 2, dollarAmount: 200 },
    { id: 3, dollarAmount: 300 },
    { id: 4, dollarAmount: 400 },
    { id: 5, dollarAmount: 500 }
  ]
}]

const rows = computed(() => categories[0].clues.map((_, i) => categories.flatMap(category => category.clues[i])))
</script>
