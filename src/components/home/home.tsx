import { Input, Button } from 'semantic-ui-react';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Hi, dannygiap</h2>
      <input placeholder="Game ID" />
      <button>Join Game</button>
      <button>Create Game</button>
    </div>
  );
};

export default Home;
