import React, { Component } from 'react';
import './App.css';
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MediaCard from './components/quotepuller/mediaAreaFunc'
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
              onClick={() => { this.toggle('1'); }}>Kittens.jsx</NavLink>
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
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row>
              <Col>
                <Body />
                <Footer />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col>
                <Card body>
                  <CardTitle>Poker</CardTitle>
                  <CardText>Still under construction.</CardText>
                  <Button>Click to acknowledge the futility of existence</Button>
                </Card>
                < Footer />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col>
                  < MediaCard text="About me" image="http://placekitten.com/100/100"  />
                < Footer />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      
      </div>
    );
  }
}

export default App;
