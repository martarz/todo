import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';

class CreateTodo extends Component {

  render() {
    return (
      <Grid>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.add(this.state.input)
        }}
        >
        <input
          className="new-todo"
          placeholder="Add a to-do"
/*          value={this.state.newTodo}
          onKeyDown={this.handleNewTodoKeyDown}
          onChange={this.handleChange}
          autoFocus={true}*/
        />
        <button>+</button>
        </form>
      </Grid>
    );
  }
}

export default CreateTodo;