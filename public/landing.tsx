import React from 'react';
import ReactDOM from 'react-dom';
import './landing.css';
import App from './App';
import TypeIt from "typeit-react";

<TypeIt
  getBeforeInit={instance => {
    instance
      .type("Hi, I'm Alxe")
      .pause(750)
      .delete(2)
      .pause(500)
      .type("ex!");

    // Remember to return it!
    return instance;
  }}
/>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
