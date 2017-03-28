import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

class TodoListHeader extends Component {
  render() {
    return (
      <Grid>
        <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
        </thead>
      </Grid>
    );
  }
}

export default TodoListHeader;