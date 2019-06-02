import React from 'react';
import { Text, View, SectionList, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import Sectionlist from './Sectionlist'
import contacts from './contacts'

export default class App extends React.Component {

  state = {
    contacts: contacts
  }
  
  printContact = () => {console.log("You press the button!")}

  render() {
    console.log("Start rendering!")
    return (
      <View style={styles.container}>
        <Button title='Show Contact' onPress = {this.printContact} />
        <Sectionlist />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
