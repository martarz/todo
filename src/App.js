import React from 'react'
import { connect } from 'react-redux'
import { Grid, Table, Alert, Button } from 'react-bootstrap'

const todos = [
  {
    task: 'make todo app'
  }
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
      </div>
    );
  }
}