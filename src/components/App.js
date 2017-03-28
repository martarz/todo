import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import TodoInput from './input'
import TodosList from './todo-list'
import './App.css';

const todos = [
  {
    task: 'make ToDo list',
    isCompleted: false
  },
  {
    task: 'go for a walk',
    isCompleted: true
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }
  render() {
    return (
      <Grid className="App">
        <div>
          <h2>React ToDos App</h2>
        </div>
        <TodoInput/>
        <TodosList todos={this.state.todos}/>
      </Grid>
    );
  }
}

export default App;
