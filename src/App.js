import { Component } from 'react';
import './App.css';
import titleBar from './components/titlebar';

class App extends Component{
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <titleBar/>
      </header>
    </div>
    )  
  }
}

export default App;
