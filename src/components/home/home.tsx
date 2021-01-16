import './Home.css';
import Socket from '../../Socket/Socket';

const Home: React.FC = () => {
  return (
    <div id="home-container">
      <h2>Hi, dannygiap</h2>
      <form id="Game-Form">
        <input type="text" placeholder="Game ID" />
        <input type="submit" value="Join Game" />
      </form>
      <button>Create Game</button>
    </div>
  );
};

export default Home;
