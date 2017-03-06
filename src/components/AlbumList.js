import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // initializing state... (no constructor!)
  state = { albums: [] };

  componentWillMount() {
    // executed when the component is about to be rendered to the screen...
    // MAKE AJAX REQUEST HERE, then request handler calls setState and this component gets RE-rendered (with the fetched albums)
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  // helper method to generate list of albums...
  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;