import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native'

import styles from './style.js';

const RenderInput = ({
  input: { onChange, ...restInput }, 
  text,
  color,
  meta: { touched, error }
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        onChangeText={onChange} 
        {...restInput}  
        style={[styles.input, {color}]} 
        placeholderTextColor={color}
        placeholder={text}
      />
      
     {touched && (error && <Text style={[styles.error, {color}]}>{error}</Text>)}
    </View>
  );
}

export default RenderInput;