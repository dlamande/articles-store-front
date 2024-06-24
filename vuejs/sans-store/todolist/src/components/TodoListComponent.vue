<script setup lang="ts">
import { TodoListPresenterImpl, type TodoListViewModel } from "@/todoList/adapters/todoListPresenterImpl";
import { ref } from "vue";
import { ChargerTodoListUsecase } from "@/todoList/chargerTodoListUsecase";
import { TodoListRepositoryInMemory } from "@/todoList/adapters/todoList.repository.inmemory";
import { ChangerStatusTodoItemUsecase } from "@/todoList/changerStatusTodoItemUsecase";

const todoListViewModel = ref<TodoListViewModel>();

const todoListRepositoryInMemory = new TodoListRepositoryInMemory();
const chargerToDoListUsecase = new ChargerTodoListUsecase(todoListRepositoryInMemory)
chargerToDoListUsecase.execute(new TodoListPresenterImpl((viewModel) => {
  todoListViewModel.value = viewModel;
}));

const changeToDone = (id:number) => {
  const changerStatusUsecase = new ChangerStatusTodoItemUsecase(todoListRepositoryInMemory);
  changerStatusUsecase.execute(id, 'done');
  chargerToDoListUsecase.execute(new TodoListPresenterImpl((viewModel) => {
    todoListViewModel.value = viewModel;
  }));
}
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
        {{ item.title }} - {{item.status}}

        <button @click="changeToDone(item.id)">Done</button>
      </li>
    </ul>
  </div>
</template>


<style scoped>

</style>
