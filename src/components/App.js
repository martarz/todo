import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import _ from 'lodash';
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
        <CreateTodo
          todos={this.state.todos}
          createTask={this.createTask.bind(this)}
        />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </Grid>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos})
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task =  newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}

export default App;
