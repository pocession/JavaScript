// the first version of fully functional App
// give each task, checked status and deleted status and print it out
// ID of each task is hidden
// when delete button or checkbox is clicked, the deleted/checked status will be change

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
    this.state = {task:Text, id:i++}
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
      this.props.onSubmit({task:this.state.task, id:this.state.id})
    }
    this.setState ({task:'',id:i++})
  }
}


class Task extends React.Component {
  constructor () {
    super();
    this.state = {deleted:'false', checked:'false'};
  }

  handledeleted = () => {
    this.setState (state => ({deleted:'true'}))
  }

  handlechecked = () => {
    this.setState (state => ({checked:'true'}))
  }

  render () {
    return (
      <div>
        <Check onChange ={this.handlechecked} />
        <Button onClick = {this.handledeleted} />
        <span>{this.props.input.task} {this.props.input.id}  // checked status: {this.state.checked} // deleted status: {this.state.deleted}</span>
      </div>
    )
  }
}

const Button = ({onClick}) => (
  <button onClick = {onClick} type='button'>delete</button>
)

const Check = ({onChange}) => (
  <input onChange = {onChange} type = 'checkbox'/>
)


class Taskslist extends React.Component {
  static defaultProps = {
    Tasks: []
  }
  render() {
    return <div>{this.props.Tasks.map((element) => <Task input = {element} />)}</div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
