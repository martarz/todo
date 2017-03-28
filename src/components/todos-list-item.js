import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

class TodosListItem extends Component {
  render() {
    return (
      <Grid>
        <tr>
          <td>{this.props.task}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </Grid>
    );
  }
}

export default TodosListItem;