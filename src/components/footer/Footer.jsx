import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './footer.css';


export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav className="myNavNav">
        <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">TheRealBarenziah</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Credits</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Legal mentions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Become a patreon</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}