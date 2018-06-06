//ezpeed/UserPosition.js

//actions
export const USER_POSITION = 'ezpeed/UserPosition/USER_POSITION';
export const SET_USER_COORDS = 'ezpeed/UserPosition/SET_USER_COORDS';
export const CLEAR_USER_POSITION = 'ezpeed/UserPosition/CLEAR_USER_POSITION';
export const FETCHING = 'ezpeed/UserPosition/FETCHING';
export const NOT_FETCHING = 'ezpeed/UserPosition/NOT_FETCHING';

//reducer   

let initialState = {
  coords: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.9,
    longitudeDelta: 0.9,
  }, 
  info: '', 
  fetching: true
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case SET_USER_COORDS:
      return {...state, coords: action.payload};
    case USER_POSITION:
      return {...state, info: action.payload};
    case FETCHING:
      return {...state, fetching: true};
    case NOT_FETCHING:
      return {...state, fetching: false};
    case CLEAR_USER_POSITION:
      return initialState;
    default:
      return state;
  }
}

// Action Creators
export function userPosition(data) {
  return { type: USER_POSITION, payload: data };
}

export function setUserCoords(coords) {
  return { type: SET_USER_COORDS, payload: coords };
}

export function clearUserPosition() {
  return { type: CLEAR_USER_POSITION };
}

export function isFetching() {
  return { type: FETCHING };
}

export function isNotFetching() {
  return { type: NOT_FETCHING };
}