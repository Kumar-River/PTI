import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ToastAndroid, NetInfo } from 'react-native';

import { TextField } from 'react-native-material-textfield';
import { RaisedTextButton } from 'react-native-material-buttons';
import LocalizedStrings from 'react-native-localization';
import { Dropdown } from 'react-native-material-dropdown';

import Messages from '../../js/utils/Messages';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { mEmail: '', mPassword:'', mCountry:''};
  }

	render() {
    let data = [{value: 'Country 1', }, {value: 'Country 2', }, {value: 'Country 3', }];

      return (
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Image source={require("../../res/images/logo.png")} />
          </View>
          <TextField
            style={styles.email}
            containerStyle={{ width: 500 }}
            label={strings.email}
            keyboardType='email-address'
            value={this.state.mEmail}
            onChangeText={mEmail => this.setState({mEmail})}
            onSubmitEditing={(event) => {this.refs.password.focus(); }}/>
          <TextField
            ref='password'
            style={styles.password}
            containerStyle={{ width: 500 }}
            label={strings.password}
            secureTextEntry={true}
            value={this.state.mPassword}
            onChangeText={mPassword => this.setState({mPassword})}
            onSubmitEditing={(event) => {this.refs.country.focus(); }}/>
          <Dropdown
            ref='country'
            label={strings.country}
            containerStyle={{ width: 500 }}
            data={data}
            value={this.state.mCountry}
            onChangeText={mCountry => this.setState({mCountry})}/>
          <RaisedTextButton
            style={styles.submitBtnTxt}
            onPress={this.validateAndDoAction.bind(this)}
            title={strings.submit}
            color={TextField.defaultProps.tintColor}
            titleColor='white' />
        </View>
      );
	}

  validateAndDoAction=()=> {
    const {mEmail, mPassword, mCountry} = this.state;   

    if (!this.validateEmail(mEmail)) {
      ToastAndroid.show(Messages.invalidEmail, ToastAndroid.SHORT);
      return;
    }

    if (mPassword.length == 0) {
      ToastAndroid.show(Messages.enterPassword, ToastAndroid.SHORT);
      return;
    }

    if (mCountry.length == 0) {
      ToastAndroid.show(Messages.selectCountry, ToastAndroid.SHORT);
      return;
    }

    NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          this.props.navigator.replace({screen: 'Home'});
        } else {
          ToastAndroid.show(Messages.noNetwork, ToastAndroid.SHORT);
        }
      });    
  }

  validateEmail=(email)=> {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}

// Start of styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:75,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  email:{
    fontSize:22,
    color:'#000000'
  },
  password:{
    fontSize:22,
    color:'#000000'
  },
  loginView:{
    backgroundColor:'#22b14c',
    justifyContent: 'center',
  },
  submitBtnTxt:{
    width:500,
    padding:25,
    marginTop:40
  },
});
// End of styles


// Start of Localization
let strings = new LocalizedStrings({
 "en-US":{
   email:"Email",
   password:"Password",
   submit:"Submit",
   country:"Country"
 }
});
// End of Localization