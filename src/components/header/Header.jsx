import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" id="mySexyBanner">pushOrFold.jsx</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink className="mySexyText" href="https://github.com/TheRealBarenziah/pof-react">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="mySexyText">
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="https://duckduckgo.com/?q=call+or+fold%3F&ia=web" target="_blank" rel="noopener noreferrer">Call or Fold</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="http://www.perdu.com">About</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button color="success">Log in</Button>{' '}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}