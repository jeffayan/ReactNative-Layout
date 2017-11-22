/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  componentDidMount(){
     AsyncStorage.getItem('@ItemKey', (err,res)=>{
         console.log(err,res);
     });
     
     }

  
  render() {
    console.log('Set  ',AsyncStorage.setItem('@ItemKey', 'sample'));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        
         <View style={{width : 150, height : 150, alignSelf : 'center', backgroundColor : 'red', elevation : 15, margin : 10}}></View>
         <View style={{width : 150, height : 150, alignSelf : 'center', backgroundColor : 'red', elevation : 15, margin : 10}}></View>
         <View style={{width : 150, height : 150, alignSelf : 'center', backgroundColor : 'red', elevation : 15, margin : 10}}></View>
         <View style={{width : 150, height : 150, alignSelf : 'center', backgroundColor : 'red', elevation : 15, margin : 10}}></View>
         <View style={{width : 150, height : 150, alignSelf : 'center', backgroundColor : 'red', elevation : 15, margin : 10}}></View>
         <View style={{width : 150, height : 150, alignSelf : 'center', backgroundColor : 'red', elevation : 15, margin : 10}}></View>
         <View style={{width : 150, height : 150, alignSelf : 'center', backgroundColor : 'red', elevation : 15, margin : 10}}></View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow : 'visible',
  },
  welcome: {
    fontSize: 20,
    alignSelf : 'flex-end',
    margin: 10,
   // opacity : 1,
    elevation : 0.1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontStyle : 'italic',
    lineHeight : 20,
    textDecorationLine : 'underline line-through',
    textShadowColor : 'red',
    textShadowOffset : {
      width : 0.5,
      height : 0.5,
    },
    textShadowRadius : 5,
    letterSpacing : 20,
  },
});
