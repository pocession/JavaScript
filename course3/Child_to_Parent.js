import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Parent extends React.Component {
  state = {msg:'start'}

  transferMsg(msg) {
    this.setState({msg})
  }

  render () {
    return (
    <div>
      <p>Parent : {this.state.msg} </p>
      <Child transferMsg = {msg => this.transferMsg(msg)} input = 'Msg from Parent'/>
    </div>
      )
  }
}

class Child extends React.Component {
  static defaultProps = {
    input: []
  }

  componentDidMount () {
    setTimeout (() => {
      this.props.transferMsg('We change the state of parent')
    },1000)
  }
  render () {
    return ( <div>Child: {this.props.input} </div>
  )}
}

ReactDOM.render(<Parent />, document.getElementById("root"));
