<template>
  <div class="progress-card">
    <div class="progress-header">
      <span class="progress-title">Прогресс за сегодня</span>
      <span class="progress-pct">{{ todoStore?.progressPercentage || 0 }}%</span>
    </div>
    
    <div class="progress-bar-bg">
      <div 
        class="progress-bar-fill" 
        :style="{ width: (todoStore?.progressPercentage || 0) + '%' }"
      ></div>
    </div>

    <div class="progress-labels">
      <div>Выполнено: <span>{{ todoStore?.doneTodos }}</span></div>
      <div>Осталось: <span>{{ todoStore?.notcompletedTodos }}</span></div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/useTodoStore';

const todoStore = useTodoStore()

</script>

<style scoped>

</style>