import Restuarant from '../restuarant/restuarant'

import './game.css';
const Game: React.FC = () => {
    return (
      <div className ="flex">
        <div> 
          <h1> Players</h1>
        </div>
        <Restuarant/>
          <div> 
            <h1>Chat</h1>
          </div>
      </div>
    );
  };

export default Game;