import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ProfileView from './src/views/ProfileView';

console.disableYellowBox = true;

export default class App extends Component<Props> {
  render() {
    return (
      <ProfileView />
    );
  }
}

