import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: .2,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 28,
    color: '#fff',
  },
  subContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginTop: 50
  },
  backContainer: {
    flex: 1,
    color: '#fff'
  },
  titleContainer: {
    flex: 2,
  }
});

export default styles;