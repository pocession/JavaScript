import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Tasks(props) {
  return (
    <li>
      <input type="checkbox" />
      <button>Delete</button>
      <span>
        <text>We have to {props.task} </text>
      </span>
    </li>
  );
}

//should make App as a component
// and create render() to render App
// should write something like:
// render() {
//  return (<div><button>Add tasks</button><div><ul>...</ul></div></div>)
//}
class App extends React.Component {
  render () {
    return (
      <div>
        <button>Add tasks</button>
        <div>
          <ul>
            {[<Tasks task="clean house" />,
            <Tasks task="feed cats" />,
            <Tasks task="do laundry" />]}
          </ul>
        </div>
       </div>
    )

  }
}


ReactDOM.render(<App />, document.getElementById("root"));
