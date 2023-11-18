import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { initialTodos } from './data';
import { StoreT } from './store.types';

export const useTodoStore = create<StoreT>()(
  persist(
    (set, get) => ({
      todos: initialTodos,
      addTodo: (todo) => set({ todos: [...get().todos, todo] }),
      toggleTodo: (id) =>
        set({ todos: get().todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)) }),
      removeTodo: (id) => set({ todos: get().todos.filter((todo) => todo.id !== id) }),
    }),
    {
      name: 'todos',
      storage: createJSONStorage(() => window.localStorage),
    },
  ),
);
