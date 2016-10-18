require('./style.sass')
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getInitialState(){
    console.log(window.innerWith);
  }
  handleResize(e){
    console.log(window.innerWidth);
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }
  render() {
    return (
      <div className="App">
        <div className='Header'>
          Header
        </div>
        <div className='Main'>
          Main
        </div>
        <div className='Footer'>
          Footer
        </div>
      </div>
    );
  }
}

export default App;
