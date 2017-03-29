import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Grid, Pager} from 'react-bootstrap';
import _ from 'lodash';
import TodosList from './todos-list'
import CreateTodo from './create-todo'
import { createStore } from 'redux'
import './App.css';

import { fetchNotes } from './state/notes'

  class App extends Component {
    componentWillMount(){
      this.props.fetchNoteHelper()
    }
  render () {
      const {
/*        notes,
        props*/
      } = this.props
    }
    toggleTask(task) {
      const foundTodo = _.find(this.state.notes, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({notes: this.state.notes});
    }
    createTask(task) {
      this.state.notes.push({
        task,
        isCompleted: false
      });
      this.setState({notes: this.state.notes})
    }
    saveTask(oldTask, newTask) {
      const foundTodo = _.find(this.state.notes, todo => todo.task === oldTask);
      foundTodo.task = newTask;
      this.setState({notes: this.state.notes});
    }
    deleteTask(taskToDelete) {
      _.remove(this.state.notes, todo => todo.task === taskToDelete);
      this.setState({notes: this.state.notes});
    }
    render() {
      return (
        <Grid className="App">
          <div>
            <h2>React ToDos App</h2>
          </div>
          <table className="table-wrap">
          <CreateTodo
            notes={this.state.notes}
            createTask={this.createTask.bind(this)}
          />
          <TodosList
            notes={this.state.notes}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
          />
          </table>
          <Pager>
            <Pager.Item href="#">Previous</Pager.Item>{' '}<Pager.Item href="#">Next</Pager.Item>
          </Pager>
        </Grid>
      );
    }
  }

export default connect(
  state => ({
    notes: state.notes
  }),
  dispatch => ({
    fetchNoteHelper: () => dispatch(fetchNotes)
  })
)(App)