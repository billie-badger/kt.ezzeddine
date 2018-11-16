import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Main from './components/Main';
import Background from './components/Background';
import Services from './components/Services';
import Restaurants from './components/Restaurants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Background />
        <Services />
        <Restaurants />
        <Contact />
      </div>
    );
  }
}

export default App;
