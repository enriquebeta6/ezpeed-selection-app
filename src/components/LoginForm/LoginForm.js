import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import RenderInput from '../RenderInput/RenderInput.js';

import { KeyboardAvoidingView } from 'react-native';
import validate from './validateLogin.js';
import styles from './style.js';

const LoginForm = props => {
  const { handleSubmit } = props;
  
  return (
    <View style={styles.container}>
      <View>
        <Field name="email" component={RenderInput} text='Email' color='#fff'/>
        <Field name="password" component={RenderInput} text='Senha' color='#fff'/>
        
        <View style={styles.submitContainer}>
          <TouchableOpacity onPress={handleSubmit(props.loginUser)} style={styles.btnSubmit}>
            {
              (!props.login.isLoggin &&
                 <Text style={styles.btnText}>Entrar</Text>) ||
              (props.login.isLoggin &&
                 <ActivityIndicator size="large" color="#d64747" />)
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm);
