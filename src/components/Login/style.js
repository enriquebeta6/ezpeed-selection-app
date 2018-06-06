import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 28,
    marginTop: 10,
    color: '#fff',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .4
  },
  textWhite: {
    color: '#fff',
    fontSize: 15
  },
  errorMessage: {
    color: '#fff'
  },
  errorContainer: {
    flex: .2,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  }
});

export default styles;