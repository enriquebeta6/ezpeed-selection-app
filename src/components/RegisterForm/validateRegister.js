const validate = values => {
  const errors = {}
  
  if (!values.name) {
    errors.name = 'Requerido';
  } 
  
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email Invalido';
  }
  
  if (!values.password) {
    errors.password = 'Requerido';
  } else if (values.password.length < 6) {
    errors.password = 'La contrasena debe tener minimo 6 caracteres.';
  }
  
  if (!values.password_confirm) {
    errors.password_confirm = 'Requerido';
  } else if (values.password_confirm !== values.password) {
    errors.password_confirm = 'Las contrasenas no coinciden.';
  }
  
  return errors
}

export default validate;