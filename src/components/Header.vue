<template>
  <div class="header">
    <div class="header-top">
      <h1 class="app-title">My Tasks</h1>
      <div class="date-badge">{{ dayOfWeek }}, {{ formattedDate }}</div>
    </div>
    <div class="stats-line">
      <div><span>{{ todoStore?.totalTodos }}</span> задач сегодня</div>
      <div><span>{{ todoStore?.doneTodos }}</span> выполнено</div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/useTodoStore';
import { ref, onMounted, onUnmounted, computed } from 'vue';


const todoStore = useTodoStore()
const now = ref(new Date())

const dayOfWeek = computed(() => {
  return now.value.toLocaleDateString('ru-RU', { weekday: 'short' });
});

const formattedDate = computed(() => {
  return now.value.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
  });
});

</script>

<style scoped></style>


