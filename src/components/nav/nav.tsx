import { useState } from 'react';
import './Nav.css';
import { Button, Menu } from 'semantic-ui-react';

const Nav: React.FC = () => {
  return (
    <Menu size="huge" id="navbar" inverted>
      <h1 id="logo">Welp, Let's Eat</h1>

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
