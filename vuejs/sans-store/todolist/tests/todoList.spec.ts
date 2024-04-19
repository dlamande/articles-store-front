import { expect } from "vitest";
import { ChargerTodoListUsecase, type TodoList } from "@/todoList/chargerTodoListUsecase";
import { TodoListPresenterImpl, type TodoListViewModel } from "@/todoList/adapters/todoListPresenterImpl";
import type { TodoListRepository } from "@/todoList/ports/todoListRepository";

class ChargerTodoListRepositoryForTest implements TodoListRepository {
    charger(): TodoList {
        return {
            items: [{
                id: 1,
                title: "Faire les courses",
                completed: false,
            }]
        };
    }
}

describe("todoList", () => {
    it("retourner une todoList", () => {
        // GIVEN
        const chargerTodoListUsecase = new ChargerTodoListUsecase(new ChargerTodoListRepositoryForTest());
        // WHEN // THEN
        chargerTodoListUsecase.execute(new TodoListPresenterImpl(todoListViewMdeol => {
            expect(todoListViewMdeol).toStrictEqual<TodoListViewModel>(
                {
                    items: [{
                        id: 1,
                        title: "1. Faire les courses",
                        completed: false,
                    }]
                });
        }));
    });
});
