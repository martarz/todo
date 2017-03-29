import React, {Component} from 'react';


class TodosListHeader extends Component {
  render() {
    return (
        <thead>
        <tr>
          <th>Checkbox</th>
          <th>Task</th>
          <th>Actions</th>
        </tr>
        </thead>
    );
  }
}

export default TodosListHeader;