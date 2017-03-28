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
        this.props.save(this.state.input)
      }}
      >
        <input
          type="text"
          placeholder="Add a to-do..."
          value={this.state.input}
          onChange={(event) => this.setState({ name: event.target.value })}>
        </input>
        <button>Save</button>
      </form>
    )
  }
}
export default TodoInput


