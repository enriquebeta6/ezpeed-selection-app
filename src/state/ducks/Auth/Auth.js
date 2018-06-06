//ezpeed/Auth.js

//actions
export const USER_AUTHENTICATED = 'ezpeed/Auth/USER_AUTHENTICATED';
export const CLEAR_USER_TOKEN = 'ezpeed/Auth/CLEAR_USER_TOKEN';

//reducer   
export default function reducer(state = {token: false}, action){
  switch (action.type) {
    case USER_AUTHENTICATED:
      return {...state, token: action.payload};
    case CLEAR_USER_TOKEN:
      return {...state, token: false};
    default:
      return state;
  }
}

// Action Creators
export function userAuthenticated(token) {
  return { type: USER_AUTHENTICATED, payload: token };
}

export function clearUserToken() {
  return { type: CLEAR_USER_TOKEN };
}