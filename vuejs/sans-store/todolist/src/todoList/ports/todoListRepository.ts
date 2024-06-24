import type { TodoList } from "@/todoList/chargerTodoListUsecase";

export interface TodoListRepository {
    charger(): TodoList;
    changerStatus(id: number, status: "todo" | "doing" | "done"): void;
}
