import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  // initializing state... (no constructor!)
  state = { albums: [] };

  componentWillMount() {
    // executed when the component is about to be rendered to the screen...
    // MAKE AJAX REQUEST HERE...
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;