import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';

import Login from './Login';

export default class Splash extends Component {

	componentWillMount() {
	  setTimeout(async () => {
	    	    
	    this.props.navigator.replace({screen: 'Login'});

	    /*try {
	      const userID = await AsyncStorage.getItem('userID');
	      if (userID !== null) {
	        navigator.replace({screen: 'Home'});
	      }
	      else {
	        navigator.replace({screen: 'Home'});
	      }
	    } catch (error) {
	      console.log(error);
	    }*/
	  }, 2000);
	}

	render() {
	  return (
	    <View style={styles.container}>	      
	      <Image source={require("../../res/images/logo.png")} />
	    </View>
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
