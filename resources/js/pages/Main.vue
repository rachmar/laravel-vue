<script setup>
import { onMounted } from 'vue'
import { useTodoStore } from '../stores/todo'
import { useModalModule } from '../modules/modal'

import MainContent from '../components/main/MainContent.vue'
import ModalForm from '../components/modals/ModalForm.vue'

const todoStore = useTodoStore();
const modalModule = useModalModule();

onMounted(async () => {
  await todoStore.getTodos();
});

</script>

<template>
  <MainContent>
    <div>

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

      <ModalForm :modalModule="modalModule">
        <form>
          <div class="row">
            <div class="col-sm-6">

              <div class="form-group">
                <label>Text</label>
                <input type="text" class="form-control" placeholder="Enter ...">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Text Disabled</label>
                <input type="text" class="form-control" placeholder="Enter ..." disabled="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">

              <div class="form-group">
                <label>Textarea</label>
                <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Textarea Disabled</label>
                <textarea class="form-control" rows="3" placeholder="Enter ..." disabled=""></textarea>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-form-label" for="inputSuccess"><i class="fas fa-check"></i> Input with
              success</label>
            <input type="text" class="form-control is-valid" id="inputSuccess" placeholder="Enter ...">
          </div>
          <div class="form-group">
            <label class="col-form-label" for="inputWarning"><i class="far fa-bell"></i> Input with
              warning</label>
            <input type="text" class="form-control is-warning" id="inputWarning" placeholder="Enter ...">
          </div>
          <div class="form-group">
            <label class="col-form-label" for="inputError"><i class="far fa-times-circle"></i> Input with
              error</label>
            <input type="text" class="form-control is-invalid" id="inputError" placeholder="Enter ...">
          </div>
          <div class="row">
            <div class="col-sm-6">

              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                  <label class="form-check-label">Checkbox</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" checked="">
                  <label class="form-check-label">Checkbox checked</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" disabled="">
                  <label class="form-check-label">Checkbox disabled</label>
                </div>
              </div>
            </div>
            <div class="col-sm-6">

              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1">
                  <label class="form-check-label">Radio</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" checked="">
                  <label class="form-check-label">Radio checked</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" disabled="">
                  <label class="form-check-label">Radio disabled</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">

              <div class="form-group">
                <label>Select</label>
                <select class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Select Disabled</label>
                <select class="form-control" disabled="">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">

              <div class="form-group">
                <label>Select Multiple</label>
                <select multiple="" class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Select Multiple Disabled</label>
                <select multiple="" class="form-control" disabled="">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </ModalForm>

    </div>
  </MainContent>
</template>

<style scoped></style>
