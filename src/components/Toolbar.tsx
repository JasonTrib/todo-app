import { FC, useRef } from 'react';
import { useTodoStore } from '../store';

const Toolbar: FC<object> = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const ref = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (ref.current?.value) {
      addTodo({ id: crypto.randomUUID(), content: ref.current?.value || '', done: false });
      ref.current.value = '';
    }
  };

  return (
    <div className="flex h-10 gap-x-2">
      <input className="w-full rounded bg-slate-300 px-2" ref={ref} />
      <div className="flex">
        <button className="whitespace-nowrap rounded bg-slate-900 px-2 text-gray-300" onClick={handleAddTodo}>
          Add todo
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
