import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './stylesheet';


class Count extends React.Component {
  constructor () {
    super()
    this.state = {
      timertype: true,
      min: 25,
      sec: '00',
      textinput: '',
      paused: true,
    }
  }

  static propTypes = {
    min: PropTypes.number // .isRequired is stopped
  }

  componentDidMount() {
    this.interval = setInterval(this.countdown, 1000)
  }

  componentWillMount() {
    clearInterval(this.interval)
  }

  setTimer = (text) => {
    let time = Number(text)
    this.setState({
      min: time,
      sec: '00',
      textinput: '',
      paused: true,
    })
  }

  displayTimerType() {
    if (this.state.timertype === true) {
      return 'Work'
    }
    else {
      return 'Break'
    }
  }

  toggleStart = () => {
    this.setState({
      paused: false,
    })
  }

  toggleStop = () => {
    this.setState({
      paused: true,
    });
  }

  toggleReset = () => {
    if (this.state.timertype === true) {
      this.setState({
        paused: true,
        min: 25,
        sec: '00',
      })
    }
    else {
      this.setState({
        paused: true,
        min: 5,
        sec: '00',
      })
    }
  }

  changeTimer = () => {
    if (this.state.timertype === true) {
      this.setState({
        timertype: false,
        min: 5
      })
    }
    else {
      this.setState({
        timertype: true,
        min: 25
      })
    }
  }

  countdown = () => {
    if (this.state.paused === false && this.state.min > 0) {
      let currentMin = this.state.min
      let currentSec = parseInt(this.state.sec, 10)
      if (currentSec == 0){
        currentMin = currentMin - 1
        currentSec = 60
        this.setState({
          min: currentMin,
          sec: String(currentSec - 1)
        })
      }
      else {
        this.setState({
          sec: String(currentSec - 1)
        })
      }
    }
    if (this.state.paused === false && this.state.min == 0 && this.state.sec === '00') {
      if (this.state.timertype === true) {
        this.setState({
          min: 25,
          paused: true,
        })
      }
      else {
        this.setState({
          min: 5,
          paused: true,
        })
      }
    }
  }

  render() {
    return(
      <View>
        <View style = {styles.counter}>
          <Text style={styles.text}>{this.displayTimerType()}:{this.state.min}:{this.state.sec}</Text>
          <TextInput style = {styles.textinput} keyboardType = 'numeric'
           returnKeyType='done'
           value = {this.state.textinput} onChangeText={(text)=>this.setState({textinput: text})}
           onSubmitEditing = {(event) => this.setTimer(event.nativeEvent.text)}
           placeholder="Enter your time here!"
          />
        </View>
        <View style = {styles.button}>
          <Button color = "crimson" onPress = {this.toggleStart} title='Start!'/>
          <Button color = "crimson" onPress = {this.toggleStop} title='Stop!'/>
          <Button onPress = {this.toggleReset} title='Reset!'/>
        </View>
        <View style = {styles.button}>
          <Button color = "crimson" onPress = {this.changeTimer} title='Change Timer'/>
        </View>
      </View>
    )
  }
}

export default Count
