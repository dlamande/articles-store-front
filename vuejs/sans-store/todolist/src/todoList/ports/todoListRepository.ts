import type { TodoList } from "@/todoList/chargerTodoListUsecase";

export interface TodoListRepository {
    charger(): TodoList;
}
