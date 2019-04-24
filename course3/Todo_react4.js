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
    return (
      <div>{tasks.map((element) => { // use tasks.map((element) => {element.task})
        return (
          <li>
            <input type="checkbox" />
            <button>Delete</button>
            <span>
              <text>We have to do {element.task}</text>
            </span>
          </li>
        )
      })}</div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
