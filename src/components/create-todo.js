import React, {Component} from 'react';
import _ from 'lodash';
import {Grid} from 'react-bootstrap';

class CreateTodo extends Component {
constructor(props) {
  super(props);

  this.state = {
    error: null
  }
}
  renderError (){
 if (!this.state.error) { return null; }
 return <div style={{ color: 'red' }}>{this.state.error}

 </div>
  }

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
          {this.renderError()}
        </form>
      </Grid>
    );
  }
handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput});
    }
 this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';

}
validateInput(task) {
    if (!task) {
      return 'Please enter a task';
    } else if ( _.find(this.props.todos, todo => task.todo === task )){
      return 'task already exists';
    }else {
      return null
    }
}
}

export default CreateTodo;