import React from 'react';
import { flattenDiagnosticMessageText } from 'typescript';

interface Player {
  id: string;
  username: string;
}

//TODO: define context (what type of state do we need to define)
interface GameContext {
  userID: string;
  gameID: string;
  players: string[]; //might change type to Player[] later
  isStarted: boolean;
  isRestaurantRound: boolean;
  isVoting: boolean;
  isWinner: false;
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
    isWinner: false,
    restaurants: [],
  },
  dispatch: () => null,
});
