// the first version of fully functional App
// give each task an ID, checked status and print it out

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let i = 0

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      Tasks : []
    }
  }

  handleSubmitTask (task) {
    this.state.Tasks.push(task)
    this.setState({Tasks: this.state.Tasks})
  }

  render() {
    return (
      <div>
        <Tasksinput onSubmit = {this.handleSubmitTask.bind(this)} />
        <Taskslist Tasks={this.state.Tasks}/>
      </div>
    )
  }
}

class Tasksinput extends React.Component {
  constructor () {
    super()
    this.state = {task:Text, id:i++, checked:'false'} //checked should be a status, will be changed in later version
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
      this.props.onSubmit({task:this.state.task, id:this.state.id, checked:this.state.checked})
    }
    this.setState ({task:'',id:i++, checked:'false'})
  }
}


class Task extends React.Component {
  render () {
    return (
      <div>{this.props.input.task} {this.props.input.id} {this.props.input.checked}</div>
    )
  }
}

class Taskslist extends React.Component {
  static defaultProps = {
    Tasks: []
  }
  render() {
    return <div>{this.props.Tasks.map((element) => <Task input = {element} />)}</div>
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
