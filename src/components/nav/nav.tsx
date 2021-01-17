import { useState } from 'react';
import './nav.css';
import '../landing/landing.css'
import { Button, Menu } from 'semantic-ui-react';
import logo from '../../assets/img/Welp.png';

const Nav: React.FC = () => {
  return (
    <Menu size="huge" id="navbar" inverted>
      <div id = 'header'>
      <h1 id="logo">Welp, Let's Eat</h1>
      <img id = 'log' src = {logo} alt= 'Logo'/> 
      </div>

      <Menu.Menu position="right" size="massive">
        <Menu.Item id="logout">
          <Button color="red" inverted>
            Log Out
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
