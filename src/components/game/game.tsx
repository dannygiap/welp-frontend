import Restuarant from '../restuarant/restuarant';
import GameContext from '../../context/GameContext';
import { useContext, useEffect } from 'react';

import './game.css';
const Game: React.FC = () => {
  const context = useContext(GameContext);
  useEffect(() => {
    console.log(context);
  }, [context.state]);
  return (
    <div>
      <h3>{`Game ID: ${context.state.gameID}`}</h3>
      <div className="flex">
        <div>
          <h1> Players</h1>
          <ul>
            {context.state.players.map((player) => {
              return <li key={context.state.userID}>{player}</li>;
            })}
          </ul>
        </div>
        <Restuarant />
        <div>
          <h1>Chat</h1>
        </div>
      </div>
    </div>
  );
};

export default Game;
