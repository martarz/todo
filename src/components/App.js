import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import TodoInput from './input'

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <div>
          <h2>React ToDos App</h2>
        </div>
        <TodoInput/>


      </Grid>
    );
  }
}

export default App;
