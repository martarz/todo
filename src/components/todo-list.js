import _ from 'lodash';
import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';
import TodoListHeader from './todo-list-header'
import TodoListItem from './todo-list-item'

class TodoList extends Component {
renderItems() {
  return _.map(this.props.todos, (todo, index) =>
    <TodoItemList key={index}{...todo}/>)
}
  render() {
    return (
      <Grid>
        <Table>
          <TodoListHeader/>
          <tbody>
            {this.renderItems()}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

export default TodoList;