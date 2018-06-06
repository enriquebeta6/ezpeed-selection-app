import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import LoginForm from '../LoginForm/LoginForm.js';
import styles from './style.js';
import * as firebase from 'firebase';
import { isLoggin, errorLogin, clearLogin } from '../../state/ducks/Login/Login.js';

class Login extends React.Component {
  
  loginUser = (data) => {
    
    this.props.isLoggin(isLoggin());
   
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
     .then(()=>{
       this.props.own.history.push('/');
     })
     .catch((error) => {
       this.props.errorLogin(errorLogin(error.message));
     })
  }
  
  componentWillUnmount(){
    this.props.clearLogin(clearLogin());
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LinearGradient
          colors={['#c6145c', '#d64747']}
          style={{ flex: 1}}
        >
          <View style={styles.header}>
            <Image
              source={require('../../../assets/img/ezpeed.logo.png')}
            />
            <Text style={styles.title}>Ezpeed</Text>
          </View>
          
          {
            this.props.login.error &&
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>{this.props.login.error}</Text>
            </View>
          }
          
          <LoginForm loginUser={this.loginUser} login={this.props.login}/>
          
          <View style={styles.footer}>
            <Link to='/register'>
                <Text style={styles.textWhite}>Clique aqui para se Cadastrar</Text>
            </Link>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    own: ownProps,
    login: state.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLoggin: (actionCreator) => {
      dispatch(actionCreator);
    },
    errorLogin: (actionCreator) => {
      dispatch(actionCreator);
    },
    clearLogin: (actionCreator) => {
      dispatch(actionCreator);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);