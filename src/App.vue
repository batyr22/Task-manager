<template>
  <div class="app">
    <Header />
    <AddInput />
    <Filters />
    <Progress />
    <TodoList />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import AddInput from './components/AddInput.vue'
import Filters from './components/Filters.vue'
import Progress from './components/Progress.vue';
import TodoList from './components/TodoList.vue';
</script>

<style scoped>

</style>
