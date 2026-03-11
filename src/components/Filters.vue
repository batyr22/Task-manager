<template>
  <div class="filters">
    <div v-for="filter in todoStore.filters" :key="filter.id">
      <button 
        class="filter-btn" 
        :class="{ 'active': todoStore.currentFilterId === filter.id }"
        @click="todoStore.currentFilterId = filter.id"
      >
        {{ filter.text }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/useTodoStore';

const todoStore = useTodoStore()

</script>