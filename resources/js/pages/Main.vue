<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from '../stores/todo'

const todoStore = useTodoStore();

onMounted(async () => {
  await todoStore.getTodos();
});

</script>

<template>
  <div class="content-wrapper">
    <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
              <div class="col-md-12">
                <h1 class="m-0">Starter Pages</h1>
              </div>
          </div>
        </div>
    </div>
    <div class="content">
        <div>
          <h2>Total Todos {{ todoStore.totalTodos }}</h2>
          <table>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
              <tr v-for="todo in todoStore.currentTodos">
                <th>{{ todo.id }}</th>
                <th>{{ todo.title }}</th>
                <th>{{ todo.completed }}</th>
              </tr>
          </table>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
