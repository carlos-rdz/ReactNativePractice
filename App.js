import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Overlay, Card, Divider, Button} from 'react-native-elements'


export default class App extends React.Component {

  state = {
    overlay : true
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Overlay
          isVisible={this.state.overlay}
        > 
          <Text> This is an overlay! </Text>
          <Button
            title="proceed to app"
            onPress={() => {
              this.setState({overlay : !this.state.overlay})
            }}
          ></Button>
        </Overlay>
        <Card
          title="This is a card"
        >
          <Text
            style={styles.text}
          >
            Test
          </Text>
        </Card>
        
        <Card
          title="Hello World"
        >
          <Text
            style={styles.text}
          >
            Test
          </Text>
          <Divider
            style={styles.divider}
          >
          </Divider>
          <Text
            style={styles.text}
          >
            Below Divider
          </Text>
        </Card>
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
  text: {
    textAlign: "center"
  },
  divider: {
    backgroundColor: "blue"
  }
});
