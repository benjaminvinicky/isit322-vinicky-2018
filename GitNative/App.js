import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Micro1 from './Micro1';
import styles from './undead-styles';
import appInit from './app-init';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.getContainer}>
          <Micro1 appInit={appInit}/>
      </View>
    );
  }
}

