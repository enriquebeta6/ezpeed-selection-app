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
    flex: .4, 
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  info: {
    marginTop: 5,
    marginBottom: 5
  },
  loaderContainer: {
    flex: .4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;