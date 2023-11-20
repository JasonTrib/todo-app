import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { initialTodos } from './data';
import { Store } from './store.types';

export const useTodoStore = create<Store>()(
  persist(
    immer((set) => ({
      todos: initialTodos,
      addTodo: (todo) =>
        set((state) => {
          state.todos.push(todo);
        }),
      toggleTodo: (id) =>
        set((state) => {
          state.todos.forEach((todo) => {
            if (todo.id === id) todo.done = !todo.done;
          });
        }),
      removeTodo: (id) =>
        set((state) => {
          state.todos = state.todos.filter((todo) => todo.id !== id);
        }),
    })),
    {
      name: 'todos',
      storage: createJSONStorage(() => window.localStorage),
    },
  ),
);
