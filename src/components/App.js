import logo from '../logo.svg';
import Another from './Another';
import '../App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish react',
      isComplete: false
    }
  ])

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  const someStyle = {
    background: "blue",
    color: "white",
    fontSize: "29px",
    fontWeight: "bold"
  }
  return (
    <div className="App">

      <header className="App-header">
        <Another name="hello" />
        <div>
          <span>{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {true &&
          <p style={someStyle}>{3 + 2}</p>
        }

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
