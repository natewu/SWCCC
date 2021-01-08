import { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import React from 'react';

class App extends Component{
  render(){
    return(
    <div className="App">
      <Nav className="App-header"/>
      <Content/>
    </div>
    )  
  }
}

export default App;