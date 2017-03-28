import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

class TodosListHeader extends Component {
  render() {
    return (
        <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
        </thead>
    );
  }
}

export default TodosListHeader;