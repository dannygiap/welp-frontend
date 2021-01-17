import './landing.css';
import Socket from '../../Socket/Socket';
import { useState } from 'react';
import Boxes from './boxes';


function Landing() {
  return (
    <div className = 'land'>
      <title>Welp, Lets Eat</title>
      <Boxes />
      <Boxes />
      <Boxes />
    </div>
  
  );
}
export default Landing;