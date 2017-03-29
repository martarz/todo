import _ from 'lodash';
import { connect } from 'react-redux'
import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';
import TodosListItem from './todos-list-item'
import { fetchNotes } from './state/notes'

export default connect(
  state => ({
    notes: state.notes
  })
)(

class TodosList extends Component {
renderItems() {

  const props = _.omit(this.props, 'notes');

  return _.map(this.props.notes, (todo, index) =>
    <TodosListItem key={index}{...todo} {...props}/>)
}
  render() {
    return (
      <Grid>
        <Table>
          <thead>
          <tr>
            <th>Checkbox</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>

        </Table>
      </Grid>
    );
  }
}
)
