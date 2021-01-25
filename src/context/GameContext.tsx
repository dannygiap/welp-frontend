import React from 'react';
import Game from '../components/game/game';

const GameContext = React.createContext({});

const GameProvider: React.FC = () => {
  return <GameContext.Provider value={{}}></GameContext.Provider>;
};

export default GameProvider;
