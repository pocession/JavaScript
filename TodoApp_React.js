// My Todo App by React

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

  handleChecked (id) {
    this.setState ({
      Tasks: this.state.Tasks.map(element => {
        if (element.id !== id) return element
        return {id: element.id, task: element.task, checked: !element.checked,}
      })
    })
  }

  handleDeleted (id) {
    this.setState({
      Tasks: this.state.Tasks.filter(element => element.id !== id)
    })
  }

  render() {
    return (
      <div>
        <Tasksinput onSubmit = {this.handleSubmitTask.bind(this)} />
        <div>Total tasks: {this.state.Tasks.length}</div>
        <div>Total unchecked tasks: {this.state.Tasks.filter(element => element.checked === false).length}</div>
        <ul>{this.state.Tasks.map(element =>
        <Taskslist
        onChange = {() => this.handleChecked(element.id)}
        onClick = {() => this.handleDeleted(element.id)}
        Tasks={element}/>)}</ul>
      </div>
    )
  }
}

class Tasksinput extends React.Component {
  constructor () {
    super()
    this.state = {task:Text, id:i++, deleted:false, checked:false}
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
      this.props.onSubmit({task:this.state.task, id:this.state.id, checked: this.state.checked, deleted:this.state.deleted})
    }
    this.setState ({task:'',id:i++, checked:false, deleted: false})
  }
}

class Taskslist extends React.Component {
  static defaultProps = {
    Tasks: []
  }
  render() {
    return (
    <li>
      <input type="checkbox" checked = {this.props.Tasks.checked} onChange = {this.props.onChange}/>
      <button deleted = {this.props.Tasks.checked} onClick = {this.props.onClick}>Delete</button>
      {this.props.Tasks.task} id: {this.props.Tasks.id}
    </li>
    )
  }
}


const Button = ({onClick}) => (
  <button onClick = {onClick} type='button'>delete</button>
)

ReactDOM.render(<App />, document.getElementById("root"));
