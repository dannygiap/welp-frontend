import React, { useState, useReducer, useEffect } from 'react';
import GameContext from './GameContext';
import { ACTIONS, gameReducer } from './reducers';
import Socket from '../Socket/Socket';
import { Accordion } from 'semantic-ui-react';

//TODO: add socket handlers and setup reducers
const GlobalState = (props) => {
  const [userID, setUserID] = useState('');
  const [state, dispatch] = useReducer(gameReducer, {
    userID: 'yoyoyo',
    gameID: '',
    players: [],
    isStarted: false,
    isRestaurantRound: false,
    isVoting: false,
    restaurants: [],
  });

  useEffect(() => {
    console.log(state);
    Socket.initializeSocket();
    const socket = Socket.getSocket();
    socket.on('connected', (data) => {
      dispatch({ type: ACTIONS.INIT_USER, payload: { id: data.id } });
      setUserID(data.id);
      console.log(`id ${data.id} has connected to socket server`);
    });
  }, []);

  useEffect(() => {
    const socket = Socket.getSocket();
    socket.on('game-created', (data) => {
      console.log('creating game ');
      dispatch({ type: ACTIONS.CREATE_GAME, payload: { gameID: data.gameID } });
    });

    socket.on('player-joined', (data) => {
      console.log('creating game ');
      dispatch({ type: ACTIONS.JOIN_GAME, payload: { gameID: data.gameID } });
    });

    return () => {
      socket.removeEventListener('game-created');
      socket.removeEventListener('player-joined');
    };
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GlobalState;
