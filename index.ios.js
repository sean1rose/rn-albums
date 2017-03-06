
// import a library to help create a component
import React from 'react';
import Header from './src/components/header';
import { AppRegistry } from 'react-native';

// create a component
const App = () => {
  return (
    <Header headerText={'Albums'} />
  );
};

// render it to the device
  // register component to the RN Application
AppRegistry.registerComponent('albums', () => App);