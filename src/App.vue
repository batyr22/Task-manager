<template>
  <div class="app">
    <Header />
    <AddInput />
    <Filters />
    <!-- <Categories /> -->
    <Progress />
    <TodoList />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import AddInput from './components/AddInput.vue'
import Filters from './components/Filters.vue'
import Categories from './components/Categories.vue';
import Progress from './components/Progress.vue';
import Activetask from './components/Activetask.vue';
import Completedtask from './components/Completedtask.vue';
import TodoList from './components/TodoList.vue';

</script>

<style scoped>

</style>
