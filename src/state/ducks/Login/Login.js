//ezpeed/Login.js

//actions
export const IS_LOGGING = 'ezpeed/Login/IS_LOGGING';
export const CLEAR_LOGIN = 'ezpeed/Login/CLEAR_LOGIN';
export const ERROR_LOGIN = 'ezpeed/Login/ERROR_LOGIN';

//reducer

export default function reducer(state = {isLoggin: false, error: false}, action){
  switch (action.type) {
    case IS_LOGGING:
      return {isLoggin: true, error: false};
    case ERROR_LOGIN:
      return {error: action.payload, isLoggin: false};
    case CLEAR_LOGIN:
      return {isLoggin: false, error: false};
    default:
      return state; 
  }
}

// Action Creators
export function isLoggin() {
  return { type: IS_LOGGING };
}

export function clearLogin() {
  return { type: CLEAR_LOGIN };
}

export function errorLogin(error) {
  return { type: ERROR_LOGIN, payload: error };
}