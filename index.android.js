// Index.android.js - place code in here for Android
// Step 1: Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Step 2: Create a component
const App = () => (
  //Two components is like return 1 and return 2. Requires View to display more than one.
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList/>
  </View>
);

// Step 3: Render it to the device
AppRegistry.registerComponent('albums', () => App);