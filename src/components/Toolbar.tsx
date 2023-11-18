import { FC, useState } from 'react';
import { useTodoStore } from '../store/store';

const Toolbar: FC<object> = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [inputValue, setInputValue] = useState('');
  const canAddTodo = !!inputValue.length;

  const handleAddTodo = () => {
    if (inputValue) {
      addTodo({ id: crypto.randomUUID(), content: inputValue || '', done: false });
      setInputValue('');
    }
  };

  return (
    <div className="flex h-10 gap-x-2">
      <input
        className="w-full rounded bg-slate-300 px-2 outline-none hover:bg-slate-200 focus:bg-slate-100"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex">
        <button
          className={`whitespace-nowrap rounded px-2 ${
            canAddTodo
              ? 'bg-slate-900 text-gray-300 hover:bg-slate-950'
              : 'cursor-not-allowed bg-slate-800 text-gray-500'
          }`}
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
