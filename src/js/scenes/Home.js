import React, { Component } from 'react';
import { StyleSheet, View, Text, DrawerLayoutAndroid} from 'react-native';

import { TextField } from 'react-native-material-textfield';

export default class Home extends Component {

	render() {
      return (
        <DrawerLayoutAndroid
          renderNavigationView={() =>

            <Text>Menu</Text>
          }>
          <Text>Content</Text>
        </DrawerLayoutAndroid>
      );
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
});
