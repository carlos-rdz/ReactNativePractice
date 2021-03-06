import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Overlay, Card, Divider, Button} from 'react-native-elements';
import Greeting from "./Greeting";
import Recipe from "./Recipe";

export default class App extends React.Component {
  state = {
    overlay : true
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Recipe></Recipe>
      <Greeting/>
        <Text> Test </Text>
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
});
