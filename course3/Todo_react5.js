import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const tasks = [
  {task: 'clean house'},
  {task: 'feed cats'},
  {task: 'do lundary'}
]

class Dotasks extends React.Component { // breakdown 'render each item' and 'render whole page'
  render () {
    const {abc} = this.props
    return (
      <li>
        <input type="checkbox" />
        <button>Delete</button>
        <span>
          <text>We have to do {abc.task}</text>
        </span>
      </li>
    )
  }
}

class App extends React.Component {
  render () {
    return (
    <div>{tasks.map((element) => <Dotasks abc = {element}/>)}</div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
