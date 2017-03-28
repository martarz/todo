import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>React ToDos App</h2>
        </div>
        <p>
          <form action="/action_page.php">
          <input type="text" name="todos"/><br/>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
