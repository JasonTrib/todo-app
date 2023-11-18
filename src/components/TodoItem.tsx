import { FC } from 'react';
import { useTodoStore } from '../store/store';
import { Todo } from '../store/store.types';

type TodoItem = {
  todo: Todo;
};

const TodoItem: FC<TodoItem> = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleToggleTodo = (id: Todo['id']) => {
    toggleTodo(id);
  };

  const handleRemoveTodo = (id: Todo['id']) => {
    removeTodo(id);
  };

  return (
    <li className="">
      <div className="flex h-8 w-full gap-x-2">
        <div
          className={`flex flex-grow cursor-pointer items-center rounded px-1 text-left selection:bg-transparent ${
            todo.done ? 'bg-green-400 line-through hover:bg-green-300' : 'bg-slate-300 hover:bg-slate-200'
          }`}
          onClick={() => handleToggleTodo(todo.id)}
        >
          {todo.content}
        </div>
        <div
          className="flex w-8 cursor-pointer items-center justify-center rounded bg-red-900 hover:bg-red-700"
          onClick={() => handleRemoveTodo(todo.id)}
        >
          ❌
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
