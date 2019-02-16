import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Overlay, Button, Image} from 'react-native-elements'


export default class App extends React.Component {
  state = {
    overlay : true
  }
//   
  render() {
    return (
      <Overlay
        style={styles.container}
        isVisible={this.state.overlay}
      >
        <View style={styles.container2}>
            <Text style={styles.text}> Hello and Welcome to the App! </Text>
            <View style={styles.container3}>
            <Image
            source={require('./images/elephant.png')}
            style={styles.image}
            />
            </View>
            <View stlye={styles.container3}>
                <Button
                    title="Click to proceed to the App"
                    type="outline"
                    onPress={()=>{
                        this.setState({overlay : !this.state.overlay})
                    }}
                    titleStyle={styles.button}
            />
            </View>
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container3: {
    flex: .5
  },
  text: {
      color: "orange",
      textAlign: "center",
      flex : .4,
      fontSize : 35,
      paddingTop : 20 
  },
  button : {
    fontSize : 20
  },
  image: {
    //   flex: .6,
      height: 150,
      width: 150
  }
});
