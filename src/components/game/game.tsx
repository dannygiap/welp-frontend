import Restuarant from '../restuarant/restuarant';
import GameContext from '../../context/GameContext';
import { useContext, useEffect } from 'react';
import uuid from 'react-uuid';
import { ACTIONS } from '../../context/reducers';
import Socket from '../../Socket/Socket';

import './game.css';
import '../home/home.css';
const Game: React.FC = () => {
  const context = useContext(GameContext);
  useEffect(() => {
    console.log(context.state);
  }, [context.state]);
  return (
    <div>
      <h3>{`Game ID: ${context.state.gameID}`}</h3>
      <div className="flex">
        <div>
          <h1> Players</h1>
          <ul>
            {context.state.players.map((player) => {
              return <li key={uuid()}>{player}</li>;
            })}
          </ul>
        </div>
        {context.state.isStarted === false ? (
          <div>
            <button
              className="button blue"
              onClick={() => {
                Socket.getSocket().emit('start-game', context.state.gameID);
              }}
            >
              Start Game
            </button>
          </div>
        ) : (
          <Restuarant />
        )}

        <div>
          <h1>Chat</h1>
        </div>
      </div>
    </div>
  );
};

export default Game;
