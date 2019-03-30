import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './footer.css';


export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav className="myNavNav">
          <NavItem>
            <NavLink href="https://github.com/TheRealBarenziah/pof-react" target="_blank">TheRealBarenziah</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://4.bp.blogspot.com/-c3J6FK76mDU/TV5aNwXwxNI/AAAAAAAAAvs/tmkgh_mWQl8/s1600/Papilio_machaon_caterpillar.jpg">Credits</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://www.textfiles.com/anarchy/">Legal mentions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.unicef.org/">Become a patreon</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}