import './home.css';
import Socket from '../../Socket/Socket';

const Home: React.FC = () => {
  return (
    <div id="home-container">
      <h2 id="greeting">Hi, dannygiap</h2>

      <form id="game-form">
        <input type="text" placeholder="Game ID" className="input" />
        <input type="submit" value="Join Game" className="button red" />
      </form>

      <button className="button blue">Create Game</button>
    </div>
  );
};

export default Home;
