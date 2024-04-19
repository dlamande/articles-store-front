import type { TodoListRepository } from "@/todoList/ports/todoListRepository";
import type { TodoList } from "@/todoList/chargerTodoListUsecase";

export class TodoListRepositoryInMemory implements TodoListRepository {
    private todoList = {
        items: [{
            id: 1,
            title: "Faire les courses",
            completed: false,
        }]
    }

    charger(): TodoList {
        return this.todoList;
    }
}
