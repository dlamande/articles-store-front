import type { TodoList } from "@/todoList/chargerTodoListUsecase";

export interface TodoListPresenter {
    present(todoList: TodoList): void;
}
