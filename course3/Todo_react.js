import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Tasks(props) {
  return <text>You have to {props.task} </text>;
}

function Template() {
  return (
  <span>
    <Tasks task={"clean your house"} />
  </span>
  )
}

function App() {
  return (
    <div>
      <button>Add tasks</button>
      <div>
        <ul>
          <li>
            <input type="checkbox" />
            <button>delete</button>
            <Template />
          </li>
          <li>
            <input type="checkbox" />
            <button>delete</button>
            <span>
              <Tasks task="feed cats" />
            </span>
          </li>
          <li>
            <input type="checkbox" />
            <button>delete</button>
            <span>
              <Tasks task="do laundry" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
