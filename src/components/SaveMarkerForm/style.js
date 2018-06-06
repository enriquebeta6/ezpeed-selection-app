import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    flex: .4
  },
  submitContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    flexDirection: 'row'
  },
  btnSubmit: {
    backgroundColor: '#d64747',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 20
  }
});

export default styles;