
// import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => {
  return (
    <Text>Some text</Text>
  );
};

// render it to the device
  // register component to the RN Application
AppRegistry.registerComponent('albums', () => App);