import { expect } from "vitest";
import { ChargerTodoListUsecase, type TodoList } from "@/todoList/chargerTodoListUsecase";
import { TodoListPresenterImpl, type TodoListViewModel } from "@/todoList/adapters/todoListPresenterImpl";
import type { TodoListRepository } from "@/todoList/ports/todoListRepository";
import { ChangerStatusTodoItemUsecase } from "@/todoList/changerStatusTodoItemUsecase";

class ChargerTodoListRepositoryForTest implements TodoListRepository {
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

describe("todoList", () => {
    const chargerTodoListRepositoryForTest = new ChargerTodoListRepositoryForTest();
    it("retourner une todoList", () => {
        // GIVEN
        const chargerTodoListUsecase = new ChargerTodoListUsecase(chargerTodoListRepositoryForTest);
        // WHEN // THEN
        chargerTodoListUsecase.execute(new TodoListPresenterImpl(todoListViewMdeol => {
            expect(todoListViewMdeol).toStrictEqual<TodoListViewModel>(
                {
                    items: [{
                        id: 1,
                        title: "1. Faire les courses",
                        status: "todo"
                    }]
                });
        }));
    });

    it("passer un element en cours", () => {
        // GIVEN
        const chargerTodoListUsecase = new ChargerTodoListUsecase(chargerTodoListRepositoryForTest);
        const changerStatusTodoItemUsecae = new ChangerStatusTodoItemUsecase(chargerTodoListRepositoryForTest);
        // WHEN // THEN
        changerStatusTodoItemUsecae.execute(1, "doing");
        chargerTodoListUsecase.execute(new TodoListPresenterImpl(todoListViewModel => {
            expect(todoListViewModel).toStrictEqual<TodoListViewModel>(
                {
                    items: [{
                        id: 1,
                        title: "1. Faire les courses",
                        status: "doing"
                    }]
                });
        }));

    })
});
