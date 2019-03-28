import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Body from './components/body/body'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
            < Header />
            < Body />
            < Body />
            < Body />
      </div>
    );
  }
}

export default App;
