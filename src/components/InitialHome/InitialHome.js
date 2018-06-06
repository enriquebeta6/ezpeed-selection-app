import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';
import * as firebase from 'firebase';
import { LinearGradient } from 'expo';

import styles from './style.js';

export default class InitialHome extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#c6145c', '#d64747']}
          style={{ flex: 1}}
        >
          <View style={styles.header}>
            <View style={styles.brand}>
              <Image
                source={require('../../../assets/img/ezpeed.logo.png')}
              />
              <Text style={styles.title}>Ezpeed</Text>
            </View>
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Seleccione una Opcion</Text>
          </View>
          
          <View style={styles.main}>
            <View style={styles.buttonsContainer}>
              <Link to='/login'>
                <Text style={styles.btn}>Login</Text>
              </Link>
              
              <Link to='/register'>
                <Text style={styles.btn}>Cadastro</Text>
              </Link>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}