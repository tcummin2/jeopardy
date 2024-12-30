import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('board', () => {
  const board = ref([])

  return {
    board
  }
})
