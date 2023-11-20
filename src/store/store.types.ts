export type Todo = {
  id: string;
  content: string;
  done: boolean;
};

export type State = {
  todos: Todo[];
};

export type Actions = {
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: Todo['id']) => void;
  removeTodo: (id: Todo['id']) => void;
};

export type Store = State & Actions;
