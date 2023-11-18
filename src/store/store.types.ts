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
