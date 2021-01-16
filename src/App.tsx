import './App.css';
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
