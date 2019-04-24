import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const tasks = [
  {task: 'clean house'},
  {task: 'feed cats'},
  {task: 'do lundary'}
]

class App extends React.Component {
  render () {
    const taskElement = [] // create a temporary array to use data
    for (let element of tasks) {
      taskElement.push(
        <li>
          <input type="checkbox" />
          <button>Delete</button>
          <span>
            <text>We have to {element.task} </text>
          </span>
        </li>
      )
    }
    return (
      <div> {taskElement} </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
