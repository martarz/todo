import React, { Component } from 'react';
import './App.css';
import { Grid, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import TodoInput from './input'

class App extends Component {
  render() {
    return (
      <Grid>
        <div>
          <h2>React ToDos App</h2>
        </div>


        <TodoInput/>




        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Grid>
    );
  }
}

export default App;
