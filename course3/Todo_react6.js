// give Tasksinput the function to take input and return input to App
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  handleSubmitTask (task) {
    console.log(task)
  }

  render() {
    return (
      <div>
        <Tasksinput onSubmit = {this.handleSubmitTask.bind(this)}/>
        <Taskslist />
      </div>
    )
  }
}

class Tasksinput extends React.Component {
  constructor () {
    super()
    this.state = {task: ''} // allow some input, and those input can be changed -> state
  }
  render () {
    return (
      <div>
        <input value = {this.state.task} onChange = {event => this.handleTaskInput(event)}/>
        <button disabled={!this.state.task} onClick = {event => this.handleSubmit(event)}>Add tasks</button>
      </div>
    )
  }

  handleTaskInput (event) {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit (event) {
    if (this.props.onSubmit) {
      const {task} = this.state
      this.props.onSubmit({task})
    }
    this.setState ({task: ''})
  }
}


class Taskslist extends React.Component {
  render () {
    return (
      <div>Tasksilist</div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
