import './landing.css';
import Boxes from './boxes';
import TypeIt from 'typeit-react';

function Landing() {
  return (
    <div>
      <div id="types">
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type('American, Thai, Mexican')
              .pause(300)
              .options({ speed: 200 })
              .delete(23)
              .options({ speed: 45 })
              .pause(300)
              .type('Italian, Korean, Japanese')
              .pause(300)
              .options({ speed: 200 })
              .delete(25)
              .type('Vietnamese, Chinese')
              .pause(500);

            return instance;
          }}
        />
        ;
      </div>
      <div id="image-banner">
        <div id="text">Let's Eat!</div>
        <div id="descript">Choosing Food Made Simple.</div>
        <span id="types"></span>
      </div>
      <div className="land">
        <title>Welp, Lets Eat</title>
        <Boxes />
        <Boxes />
        <Boxes />
      </div>
    </div>
  );
}
export default Landing;
