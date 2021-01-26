import React, { useReducer } from 'react';
import GameContext from './GameContext';
import { ACTIONS, gameReducer } from './reducers';

//TODO: add socket handlers and setup reducers
const GlobalState = (props) => {
  const [players, dispatch] = useReducer(gameReducer, { players: [] });
  return (
    <GameContext.Provider value={{}}>{props.children}</GameContext.Provider>
  );
};

export default GlobalState;
