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
    <div className="flex">
      <div>
        <h1> Players</h1>
      </div>
      <Restuarant />
      <div>
        <h1>Chat</h1>
      </div>
    </div>
  );
};

export default Game;
