import type { TodoListRepository } from "@/todoList/ports/todoListRepository";
import type { TodoListPresenter } from "@/todoList/ports/todoListPresenter";

export interface TodoListItem {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoList {
    items: TodoListItem[];
}

export class ChargerTodoListUsecase {
    constructor(private todoListRepository: TodoListRepository) {

    }

    execute(presenter: TodoListPresenter) {
        const todoList = this.todoListRepository.charger();
        presenter.present(todoList);
    }
}
