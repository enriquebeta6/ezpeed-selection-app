//Dependencias
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Firebase from './config/Firebase.js';
import * as firebase from 'firebase';

import  { NativeRouter, Switch }  from 'react-router-native';

import { userAuthenticated, clearUserToken } from './state/ducks/Auth/Auth.js';

import Routes from './routes/routes.js';
import { Drawer } from 'native-base';
import SideBar from './components/SideBar/SideBar.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class IndexApp extends React.Component {
  constructor(props){
    super(props);
    Firebase.init();
  }
  
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setToken(userAuthenticated(
          user.uid
        ));
      } else {
        this.props.removeToken(clearUserToken());
      }
    });
  }
  
  render() {
    return (
        <Routes />
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: (actionCreator) => {
      dispatch(actionCreator);
    },
    removeToken: (actionCreator) => {
      dispatch(actionCreator);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexApp);