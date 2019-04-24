// Make Taskslist can get information from Task and render it

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let i = 0 // set a variable for id of each task

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
    this.state = {task: ''}
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
      this.props.onSubmit = ({task})
    }
    this.setState ({task:''})
  }
}


class Task extends React.Component {
  render () {
    return (
      <div>{this.props.input.task} {this.props.input.id}</div>
    )
  }
}

class Taskslist extends React.Component {
  render() {
    const Tasks = [
      {task : 'dododo', id : i+1},
      {task : 'gogogo', id : i+2},
      {task: 'yayaya', id : i+3}]
    return <div>{Tasks.map((element) => <Task input = {element} />)}</div>
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
