//ezpeed/Markers.js

//actions
export const ADD_MARKERS = 'ezpeed/Markers/ADD_MARKERS';
export const CLEAR_MARKERS = 'ezpeed/Markers/CLEAR_MARKERS';

//reducer   
export default function reducer(state = false, action){
  switch (action.type) {
    case ADD_MARKERS:
      return action.payload;
    case CLEAR_MARKERS:
      return false;
    default:
      return state;
  }
}

// Action Creators
export function addMarkers(markers) {
  return { type: ADD_MARKERS, payload: markers };
}

export function clearMarkers() {
  return { type: CLEAR_MARKERS };
}