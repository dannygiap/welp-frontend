import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Game from './components/game/game';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className ="App-header">
        <Router>
          <Switch>
              <Route path ="/" exact component = {Home}/>
              <Route path ="/game" component= {Game}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
