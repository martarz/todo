import _ from 'lodash';
import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';
import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'

class TodosList extends Component {
renderItems() {
  return _.map(this.props.todos, (todo, index) =>
    <TodosListItem key={index}{...todo}/>)
}
  render() {
    return (
      <Grid>
        <Table>
          <TodosListHeader/>
          <tbody>
            {this.renderItems()}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

export default TodosList;