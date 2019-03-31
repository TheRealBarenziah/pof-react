import React, { Component } from 'react';
import './App.css';
import BodyCats from './components/BodyCats/BodyCats'
import BodyPoker from './components/BodyPoker/BodyPoker'
import BodyAbout from './components/BodyAbout/BodyAbout'
import Footer from './components/Footer/Footer'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Nav tabs className="mySexyNav">
          <NavItem className="text-success">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>NLCats</NavLink>
          </NavItem>
          <NavItem className="text-warning">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>PushOrFold.jsx</NavLink>
          </NavItem>
          <NavItem className="text-muted" >
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>About</NavLink>
          </NavItem>
        </Nav>
<div className="myBeautifulBackground2">
        <TabContent activeTab={this.state.activeTab} >
          <TabPane tabId="1">
            <Container >
              <Row>
                <Col>
                  <BodyCats />
                </Col>
              </Row>
            </Container>
            <Footer/>
          </TabPane>

          <TabPane tabId="2">
            < BodyPoker />
            < Footer/>
          </TabPane>

          <TabPane tabId="3">
            < BodyAbout />
            < Footer />
          </TabPane>
        </TabContent>
        </div>
        </div>
        );
      }
    }
    
export default App