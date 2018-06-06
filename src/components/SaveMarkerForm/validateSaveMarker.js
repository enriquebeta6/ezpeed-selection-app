const validate = values => {
  const errors = {}
  
  if (!values.name) {
    errors.name = 'Requerido';
  } 
  
  if (!values.description) {
    errors.description = 'Requerido';
  }
  
  return errors
}

export default validate;