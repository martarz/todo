import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

class TodosListItem extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.task}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TodosListItem;