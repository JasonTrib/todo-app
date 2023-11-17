import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="heading">
        <h1>
          <span className="text-accent-1">React + TypeScript + Vite</span>
        </h1>
        <p>
          pre-configured with <span className="text-accent-2">Eslint + Stylelint + Prettier</span>
        </p>
      </div>
      <div>
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
