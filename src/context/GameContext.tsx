import React from 'react';

type Player = {
  id: string;
  username: string;
};

//TODO: define context (what type of state do we need to define)
interface GameContextProps {
  players: Player[];
  isStarted: boolean;
  isRestaurantRound: boolean;
  isVoting: boolean;
  restaurants: string[];
}

export default React.createContext<Partial<GameContextProps>>({});
