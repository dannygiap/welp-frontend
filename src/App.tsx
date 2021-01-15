import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
    //   <div className="App">
    //     <header className="App-header">
    //       <p>
    //         Welp, lets eat
    //       </p>
    //     </header>
    //   </div>
  );
}

export default App;
