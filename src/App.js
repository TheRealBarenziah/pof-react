import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
            < Header />
            < Body />
            < Footer />
      </div>
    );
  }
}

export default App;
