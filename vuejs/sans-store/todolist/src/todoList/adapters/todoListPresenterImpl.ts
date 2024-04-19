import type { TodoListPresenter } from "@/todoList/ports/todoListPresenter";
import type { TodoList } from "@/todoList/chargerTodoListUsecase";

interface TodoListItemViewModel {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoListViewModel {
    items: TodoListItemViewModel[];
}

export class TodoListPresenterImpl implements TodoListPresenter {
    constructor(private todoListViewModel: (viewModel: TodoListViewModel) => void) {
    }

    present(todoList: TodoList): void {
        this.todoListViewModel({
            items: todoList.items.map(item => ({
                id: item.id,
                title: `${item.id}. ${item.title}`,
                completed: item.completed,
            }))
        });
    }
}
