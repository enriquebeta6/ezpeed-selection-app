import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import RenderInput from '../RenderInput/RenderInput.js';
import validate from './validateSaveMarker.js';
import styles from './style.js';

const SaveMarkerForm = props => {
  const { handleSubmit } = props;
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View>
        <Field name="name" component={RenderInput} text='Nome' color='#000'/>
        <Field name="description" component={RenderInput} text='Descripção' color='#000'/>
        
        <View style={styles.submitContainer}>
          <TouchableOpacity onPress={props.back} style={styles.btnSubmit}>
               <Text style={styles.btnText}>Volver</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleSubmit(props.save)} style={styles.btnSubmit}>
               <Text style={styles.btnText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default reduxForm({
  form: 'SaveMarkerForm',
  validate
})(SaveMarkerForm);
