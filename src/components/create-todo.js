import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';

class CreateTodo extends Component {

  render() {
    return (
      <Grid>
        <form onSubmit={this.handleCreate.bind(this)}>
        <input
          className="new-todo"
          placeholder="Add a to-do"
          ref="createInput"
        />
        <button>+</button>
        </form>
      </Grid>
    );
  }
handleCreate(event) {
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
}

}

export default CreateTodo;