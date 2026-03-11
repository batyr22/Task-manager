<template>
  <div class="header">
    <div class="header-top">
      <h1 class="app-title">My Tasks</h1>
      <div class="date-badge" id="dateBadge">Пн, 9 марта</div>
    </div>
    <div class="stats-line">
      <div><span>{{ todoStore?.totalTodos }}</span> задач сегодня</div>
      <div><span>{{ todoStore?.doneTodos }}</span> выполнено</div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/useTodoStore';

const todoStore = useTodoStore()

</script>

<style scoped></style>


