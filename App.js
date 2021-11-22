
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, 
   Text,
   View,
   TextInput,
   Button,
   Image,
   TouchableOpacity,
   CheckBox,
   Dimensions

  } from 'react-native';
  import { createAppContainer } from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
    import Home from './src/Home.js' 
  import Main from './src/Main.js'

const Navigation =createStackNavigator({
  Home:{
    screen: Home,
  },
  Main:{
    screen: Main,
  }
});

const App = createAppContainer(Navigation);

export default App; 