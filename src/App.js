import React, { Component } from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Buttons />

        <footer> A <a href="http://www.sejori.co">Sejori</a> website. </footer>
      </div>
    );
  }
}

export default App;
