import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import styles from './style.js';

class SideBar extends React.Component {
  
  handlePress = () => {
    firebase.auth().signOut()
    .then(() => {
      this.props.goHome();
    })
  } 
  
  render(){
    return (
      <View style={[ styles.container, { backgroundColor: '#fff' } ]}>
        <View style={styles.itemMenu}>
          <Link to='/'>
            <Text style={styles.item}>Home</Text>
          </Link>
        </View>
        
        <View style={styles.itemMenu}>
          <Link to='/markerList'>
            <Text style={styles.item}>Puntos Guardados</Text>
          </Link>
        </View>
        
        <View style={styles.itemMenu}>
            <Text 
              onPress={this.handlePress} 
              style={[styles.item, {color: '#ff0000'}]}
            >
              Logout
            </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    own: ownProps
  }
}

export default connect(mapStateToProps, null)(SideBar);