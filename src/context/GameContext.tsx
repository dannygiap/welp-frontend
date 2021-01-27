import React from 'react';

interface Player {
  id: string;
  username: string;
}

//TODO: define context (what type of state do we need to define)
interface GameContext {
  userID: string;
  gameID: string;
  players: Player[];
  isStarted: boolean;
  isRestaurantRound: boolean;
  isVoting: boolean;
  restaurants: string[];
}

export default React.createContext<{
  state: GameContext;
  dispatch: React.Dispatch<any>;
}>({
  state: {
    userID: 'yoyoyo',
    gameID: '',
    players: [],
    isStarted: false,
    isRestaurantRound: false,
    isVoting: false,
    restaurants: [],
  },
  dispatch: () => null,
});
