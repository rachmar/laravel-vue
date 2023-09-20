<script setup>
import { onMounted } from 'vue'
import { useTodoStore } from '../stores/todo'
import { useAuthStore } from '../stores/auth'
import { useModalModule } from '../modules/modal'

import Modal from '../components/modules/Modal.vue'
import HomeLayout from '../components/layouts/HomeLayout.vue'
import { storeToRefs } from 'pinia'

const modalModule = useModalModule();

const todoStore = useTodoStore();

const authStore = useAuthStore();
const {incrementCount} = authStore;
const {count} = storeToRefs(authStore);

onMounted(async () => {
  await todoStore.getTodos();
});

</script>

<template>
  <HomeLayout>
    <div>
      <button type="button" @click="incrementCount">Increament Count {{ count }}</button>

      <button type="button" @click="modalModule.openModal()">Open Modal</button>

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

      <Modal :modalModule="modalModule">
        <form>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div><div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div>
        </form>
      </Modal>

    </div>
  </HomeLayout>
</template>

<style scoped>
</style>
