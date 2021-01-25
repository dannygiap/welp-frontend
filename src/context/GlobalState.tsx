import React from 'react';
import GameContext from './GameContext';

//TODO: add socket handlers and setup reducers
const GlobalState = (props) => {
  return <GameContext.Provider value={{}}></GameContext.Provider>;
};

export default GlobalState;
