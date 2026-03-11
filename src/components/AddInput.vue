<template>
  <div class="add-wrap">
    <input 
      v-model="todoStore.newTodoText" 
      class="add-input" 
      type="text" 
      placeholder="Добавить задачу..."
      @keyup.enter="todoStore.addTodo()" 
    >
    <button @click="todoStore.addTodo" class="add-btn">+</button>
  </div>

  <div class="categories">
    <div v-for="cat in todoStore.allCategories" :key="cat.id">
      <button 
        class="cat-chip" 
        :class="[
          cat.design, 
          { 'is-selected': todoStore.selectedForNewTodo.some(s => s.id === cat.id) }
        ]"
        @click="todoStore.toggleCategoryForNewTodo(cat)"
      >
        <span class="dot"></span> 
        {{ cat.name }} 
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/useTodoStore';
const todoStore = useTodoStore();
</script>

<style scoped>
.cat-chip {
  opacity: 0.6; 
}

.cat-chip.is-selected {
  opacity: 1;
  border-color: #42b883; 
  transform: scale(1.05);
}
</style>