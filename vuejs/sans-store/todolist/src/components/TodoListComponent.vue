<script setup lang="ts">
import { TodoListPresenterImpl, type TodoListViewModel } from "@/todoList/adapters/todoListPresenterImpl";
import { ref } from "vue";
import { ChargerTodoListUsecase } from "@/todoList/chargerTodoListUsecase";
import { TodoListRepositoryInMemory } from "@/todoList/adapters/todoList.repository.inmemory";

const todoListViewModel = ref<TodoListViewModel>();

const chargerToDoListUsecase = new ChargerTodoListUsecase(new TodoListRepositoryInMemory())
chargerToDoListUsecase.execute(new TodoListPresenterImpl((viewModel) => {
  todoListViewModel.value = viewModel;
}));
</script>

<template>
  <div>
    <h1>
      TodoList
    </h1>
    <ul>
      <li
          v-if="todoListViewModel"
          v-for="item in todoListViewModel.items"
          :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
