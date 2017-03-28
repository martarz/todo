import React, { Component } from 'react';
import './App.css';
import { Grid, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <div>
          <h2>React ToDos App</h2>
        </div>

          <form action="/action_page.php">
          <input type="text" name="todos"/><br/>
          </form>

        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Grid>
    );
  }
}

export default App;
