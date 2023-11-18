import { create } from 'zustand';

export type Todo = {
  id: string;
  content: string;
  done: boolean;
};

export type StoreT = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: Todo['id']) => void;
  removeTodo: (id: Todo['id']) => void;
};

const initialTodos = [
  { id: crypto.randomUUID(), content: 'Todo 1', done: false },
  { id: crypto.randomUUID(), content: 'Todo 2', done: false },
  { id: crypto.randomUUID(), content: 'Todo 3', done: true },
  { id: crypto.randomUUID(), content: 'Todo 4', done: false },
];

export const useTodoStore = create<StoreT>()((set) => ({
  todos: initialTodos,
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id) =>
    set((state) => ({ todos: state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)) })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
