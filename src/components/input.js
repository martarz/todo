import React from 'react'
import {form, input} from 'react-bootstrap'


class TodoInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.add(this.state.input)
      }}
      >
        <input
          className="new-todo"
          placeholder="Add a to-do"
          value={this.state.newTodo}
          onKeyDown={this.handleNewTodoKeyDown}
          onChange={this.handleChange}
          autoFocus={true}
        >
        </input>
        <button>+</button>
      </form>
    )
  }
}
export default TodoInput


