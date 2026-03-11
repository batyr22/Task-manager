<template>
  <div class="todo-container">
    <div class="section-label">
      {{ currentLabel }} ({{ todoStore.filteredTodos.length }})
    </div>

    <div class="list-wrapper">
      <div 
        v-for="todo in todoStore.filteredTodos" 
        :key="todo.id" 
        class="todo-item"
        :class="{ 'done': todo.done }"
      >
        <div @click="todoStore.toggleDone(todo.id)" class="todo-check">
          <span v-if="todo.done" class="todo-check-icon">✓</span>
        </div>

        <div class="todo-content">
          <div class="todo-text">{{ todo.text }}</div>
          <div class="todo-meta" v-if="todo.categories.length">
            <span 
              v-for="cat in todo.categories" 
              :key="cat.id" 
              class="cat-chip-small" 
              :class="cat.design"
            >
              <span class="dot"></span> {{ cat.name }}
            </span>
          </div>
        </div>

        <div class="todo-actions">
          <button @click="todoStore.deleteTodo(todo.id)" class="action-btn delete">🗑</button>
        </div>
      </div>

      <div v-if="todoStore.filteredTodos.length === 0" class="empty">
        Здесь пока ничего нет...
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTodoStore } from '../stores/useTodoStore';

const todoStore = useTodoStore();

const currentLabel = computed(() => {
  const labels = { 1: 'Все задачи', 2: 'Активные', 3: 'Выполненные' };
  return labels[todoStore.currentFilterId] || 'Задачи'; // названия фильтров ИЛИ (||) задачи
});
</script>

<style scoped>
.todo-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
}

.todo-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-grow: 1;
}

.todo-text {
    font-size: 15px;
    line-height: 1.4;
    color: #2c3e50;
    word-break: break-word;
}

.todo-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.cat-chip-small {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.03em;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.2s;
    border: none;
}

.cat-chip-small .dot { width: 6px; height: 6px; border-radius: 50%; }
</style>