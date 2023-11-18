import { FC } from 'react';
import { useTodoStore } from '../store/store';
import TodoItem from './TodoItem';

const Content: FC<object> = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      {todos?.length ? (
        <ul className="flex flex-col gap-y-3">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Content;
