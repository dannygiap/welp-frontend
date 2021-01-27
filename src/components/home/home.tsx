import './home.css';
import Socket from '../../Socket/Socket';
import { useState, useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import GameContext from '../../context/GameContext';
import uuid from 'react-uuid';

const Home: React.FC = () => {
  const [gameID, setGameID] = useState('');
  const context = useContext(GameContext);
  useEffect(() => {
    console.log(context);
  }, []);
  let history = useHistory();

  const redirect = () => {
    console.log('inside redirect');
    Socket.getSocket().emit('create', uuid());
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
          //Socket.initializeSocket();
          Socket.getSocket().emit('join', gameID);
          history.push('/game');
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
