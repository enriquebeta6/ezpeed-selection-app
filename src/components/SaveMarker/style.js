import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    marginTop: 20
  },
  infoContainer: { 
    flex: .1, 
    padding: 20,
  },
  info: {
    marginTop: 5,
    marginBottom: 5
  },
  btnAdd: {
    backgroundColor: '#d64747',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
  }
});

export default styles;