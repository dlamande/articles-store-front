import type { TodoListRepository } from "@/todoList/ports/todoListRepository";
import type { TodoList } from "@/todoList/chargerTodoListUsecase";

export class TodoListRepositoryInMemory implements TodoListRepository {
    private todoList: TodoList = {
        items: [{
            id: 1,
            title: "Faire les courses",
            status: "todo",
        }]
    }
    charger(): TodoList {
        return this.todoList;

    }

    changerStatus(id: number, status: "todo" | "doing" | "done"): void {
        this.todoList.items = this.todoList.items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    status,
                };
            }
            return item;
        });
    }
}
