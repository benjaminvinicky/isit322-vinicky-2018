import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          nine: '0'
      }
  }

  getNine = () => {
      console.log('state');
      this.setState({nine: '9'})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <p className='elf'>State: {this.state.nine}</p>
          <button className='elf' onClick={this.getNine}>Get Nine</button>
      </div>
    );
  }
}

export default App;
