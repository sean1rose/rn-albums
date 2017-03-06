// functional component, just displaying album data
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from'./CardSection';

const AlbumDetail = (props) => {
  // Card has children -> the <Text> tag which has the album title -> this can be referenced in Card.js as props.children
  return (
    <Card>
      
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>

    </Card>
  );
};

export default AlbumDetail;