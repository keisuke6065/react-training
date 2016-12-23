import React, { Component } from 'react';
import Nav from './componets/nav'
import Body from "./componets/body"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Nav/>
        </div>
        <Body/>
      </div>
    );
  }
}

export default App;
