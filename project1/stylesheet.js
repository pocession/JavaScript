import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {fontSize: 72,
  },

  outputnum:{
    fontSize:72,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },

  counter: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300
  },

  button: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  textinput: {
    fontSize: 40
  },
})
