import './App.css';
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   {/* <Nav />
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    // </div> */}
    <div className="App">
      <Nav />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
