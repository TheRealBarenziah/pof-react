import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './footer.css';
import Clock from '../Clock/Clock'



export default function footer() {
    return (
      <div>
        <Nav className="sticky-footer">
          <NavItem>
            <NavLink href="https://github.com/TheRealBarenziah/pof-react" title="GitHub" target="_blank">TheRealBarenziah</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://4.bp.blogspot.com/-c3J6FK76mDU/TV5aNwXwxNI/AAAAAAAAAvs/tmkgh_mWQl8/s1600/Papilio_machaon_caterpillar.jpg" title="All credits goes to">Credits</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://www.textfiles.com/anarchy/" title="Legal mentions">Legal mentions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.unicef.org/" title="Become a patreon">Become a patreon</NavLink>
          </NavItem>
          <NavItem>
            < Clock />
          </NavItem>
          
        </Nav>
      </div>
    );
  }

