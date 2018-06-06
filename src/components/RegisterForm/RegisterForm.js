import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field } from 'redux-form'
import RenderInput from '../RenderInput/RenderInput.js';
import styles from './style.js';
import validate from './validateRegister.js';

const RegisterForm = props => {
  const { handleSubmit } = props
  
  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
          <Field name="name" component={RenderInput} text='Name' color='#fff'/>
          <Field name="email" component={RenderInput} text='Email' color='#fff'/>
          <Field name="password" component={RenderInput} text='Senha' color='#fff'/>
          <Field name="password_confirm" component={RenderInput} text='Confirme a Senha' color='#fff'/>
          
          <View style={styles.submitContainer}>
            <TouchableOpacity onPress={handleSubmit(props.createUser)} style={styles.btnSubmit}>
              <Text style={styles.btnText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default reduxForm({
  form: 'RegisterForm',
  validate
})(RegisterForm);