import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
/*import TodosInput from './input'*/
import TodosList from './todos-list'
import CreateTodo from './create-todo'
import './App.css';

const todos = [
  {
    task: 'make ToDo list',
    isCompleted: false
  },
  {
    task: 'go for a walk',
    isCompleted: true
  },
  {
    task: 'clean the windows',
    isCompleted: false
  },
  {
    task: 'make dinner',
    isCompleted: true
  },
  {
    task: 'go to the gym',
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
        <CreateTodo/>
        <TodosList todos={this.state.todos}/>
      </Grid>
    );
  }
}

export default App;
