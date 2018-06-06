import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import RegisterForm from '../RegisterForm/RegisterForm.js'
import styles from './style.js';
import * as firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';

class Register extends React.Component {
  
  createUser = (data) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        let { currentUser } = firebase.auth();
        
        currentUser.updateProfile({
          displayName: data.name,
        });
        
        firebase.database().ref(`users/${currentUser.uid}`).child('markers');
        
        this.props.history.push('/login');
      })
      .catch((error) => {
        console.log('error', error.toString());
      })
  }
  
  goHome = () => {
    this.props.history.push('/');
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LinearGradient
          colors={['#c6145c', '#d64747']}
          style={{ flex: 1, alignSelf: 'stretch'}}
        >
           <View style={styles.header}>
            <View style={styles.subContainer}>
              <View style={styles.backContainer}>
                <FontAwesome 
                  name='arrow-circle-left' 
                  size={30} color="#fff"  
                  onPress={this.goHome}
                />
              </View>
              
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Cadastro</Text>
              </View>
            </View>
          </View>
          
          <RegisterForm createUser={this.createUser} />
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    own: ownProps 
  }
}

export default connect(mapStateToProps, null)(Register);
