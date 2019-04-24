import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Parent extends React.Component{
  state = {
    msg: 'start'
  };

  transferMsg(msg) {
    this.setState({
      msg
    });
  }

  render() {
    return <div>
        <p>msg from Child_1: {this.state.msg}</p>
        <Child_1 transferMsg = {msg => this.transferMsg(msg)} />
      </div>;
  }
}

class Child_1 extends React.Component{
  componentDidMount() {
    setTimeout(() => {
      this.props.transferMsg('end')
    }, 1000);
  }

  render() {
    return <div>
      <p>child_1 component</p>
    </div>
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
