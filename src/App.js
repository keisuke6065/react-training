import React, { Component } from 'react';
import Nav from './componets/nav/nav'
import Body from "./componets/body/body"
import Footer from "./componets/footer/footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Nav/>
        </div>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
