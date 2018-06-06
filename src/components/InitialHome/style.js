import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
  },
  header: {
    flex: 1.6,
  },
  brand: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 10,
    color: '#fff',
    fontFamily: 'ubuntu-bold'
  }, 
  main: {
    flex: 1,
    paddingRight: 40,
    paddingLeft: 40,
  },
  btn: {
    backgroundColor: '#fff',
    color: '#d64747',
    justifyContent: 'center',
    alignItems: 'center',
    paddignHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20
  },
  textContainer: {
    flex: .3, 
    jusityContent: 'center',
    alignItems: 'center',
    marginTop: -20
  },
  textStyle: {
    color: '#fff', 
    fontSize: 18
  }
});

export default styles;