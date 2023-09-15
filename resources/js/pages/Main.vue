<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from '../stores/todo'
import MainContent from '../components/main/MainContent.vue';

const todoStore = useTodoStore();

onMounted(async () => {
  await todoStore.getTodos();
});

</script>

<template>
  <MainContent>
    <div>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Total Todos {{ todoStore.totalTodos }}</h3>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in todoStore.currentTodos">
                <th>{{ todo.id }}</th>
                <th>{{ todo.title }}</th>
                <th>{{ todo.completed }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </MainContent>
</template>

<style scoped></style>
