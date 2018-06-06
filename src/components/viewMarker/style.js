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
    padding: 20,
  },
  info: {
    marginTop: 5,
    marginBottom: 5
  },
  btnAdd: {
    backgroundColor: '#d64747',
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between'
  }
});

export default styles;