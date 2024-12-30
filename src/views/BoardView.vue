<template>
  <main class="flex flex-col m-auto w-4/5 h-4/5">
    <h1 class="mx-auto my-[10px] text-3xl font-bold">
      Jeopardy!
    </h1>
    <JeopardyBoard />
  </main>
</template>

<script setup lang="ts">
import JeopardyBoard from '../components/JeopardyBoard.vue'
</script>
