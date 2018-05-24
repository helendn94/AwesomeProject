// Import a library to help create a component
import React, { Component } from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text />,
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>

    );
  }
}

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>


);

// render it to the device
AppRegistry.registerComponent('AwesomeProject', () => App);
