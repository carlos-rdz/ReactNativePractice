import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Recipe extends React.Component {
  state = {
    overlay : true
  }
  
  componentDidMount(){
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",
    {headers : {"X-RapidAPI-Key": "195a5339f7mshcfa2f4b953bd270p1bbe12jsnacc5a5c4af8a"}
    })
    .then((response) => {return response.json()})
    .then(console.log)
  }

  render() {
    return (
      <View style={styles.container}>
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
