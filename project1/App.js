import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Count, {num} from './Count.js'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Count />
      </View>
    );
  }
}
