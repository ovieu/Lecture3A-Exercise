import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Alert
} from 'react-native';
import ToDo from './ToDo.js'

export default class App extends React.Component {

  state = {
    todos: [],
    text: ""
  }

  addTodo = () => {
    // Fill in the details of adding the todo here
  }

  onChangeText = text => {
    // Update state with each keystroke
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatlist}>
        {/*

          Flatlist goes here!
          Hint: Initialize ToDo's like this: <ToDo text={"Hello"}/>

        */}
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => console.log(text)} /*What method should be called here? */
            value={""} /*What should be in place of the empty string? */
          />
          <Button
            style={styles.button}
            title="Add"
            onPress={() => Alert.alert('Button pressed')} /*What should be called here? */
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    flex: 1
  },
  textinput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    height: 40,
    width: '20%',
    borderColor: 'gray',
    borderWidth: 1
  }
});
