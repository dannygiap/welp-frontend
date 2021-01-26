import './home.css';
import Socket from '../../Socket/Socket';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const [gameID, setGameID] = useState('');
  let history = useHistory();
  const redirect = () => {
    history.push('/game');
  };
  return (
    <div id="home-container">
      <h2 id="greeting">Hi, dannygiap</h2>

      <form
        id="game-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (gameID === '') return;
          Socket.initializeSocket(gameID);
          Socket.getSocket().emit('join', gameID);
        }}
      >
        <input
          type="text"
          placeholder="Game ID"
          className="input"
          onChange={(e) => {
            setGameID(e.target.value);
          }}
        />
        <input type="submit" value="Join Game" className="button red" />
      </form>

      <button className="button blue" onClick={redirect}>
        Create Game
      </button>
    </div>
  );
};

export default Home;
