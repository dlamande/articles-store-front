import type { TodoListRepository } from "@/todoList/ports/todoListRepository";

export class ChangerStatusTodoItemUsecase {
    constructor(private todoListRepository: TodoListRepository) {
    }

    execute(id: number, status: "todo" | "doing" | "done") {
        this.todoListRepository.changerStatus(id, status);
    }
}
