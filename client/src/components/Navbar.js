import React from 'react'
import {NavLink} from 'react-router-dom';
import {Menu, Segment, Image, } from 'semantic-ui-react'; 
// import styled from 'styled-components';


const Navbar = () => (
  <>
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item>
        <NavLink exact path to="/" activeStyle={styles.active}>Home</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact path to="/about" activeStyle={styles.active}>About</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact path to="/departments" activeStyle={styles.active}>Departments</NavLink>
      </Menu.Item>
    </Menu>
  </Segment>
  </>
)

const styles = {
  active: {
    color: 'orange', 
    fontWeight: 'bold', 
  }
}

export default Navbar; 
