//ezpeed/Marker.js

//actions
export const ADD_COORDS = 'ezpeed/Markers/ADD_COORDS';
export const ADD_SITE_INFO = 'ezpeed/Markers/ADD_SITE_INFO';
export const ADD_NAME_AND_DESCRIPTION = 'ezpeed/Markers/ADD_NAME_AND_DESCRIPTION';
export const CONTINUE_TO_SAVEFORM = 'ezpeed/Markers/CONTINUE_TO_SAVEFORM';
export const BACK_TO_SAVEMARKER = 'ezpeed/Markers/BACK_TO_SAVEMARKER';
export const CLEAR_SITE_INFO = 'ezpeed/Markers/CLEAR_SITE_INFO';

//reducer   
const initialState = [
  {
    coords: false, 
    info: {
      name: '', 
      description: '', 
      address: ''
    }
  },
  {
   continue: false 
  }
];

export default function reducer(state = initialState, action){
  let newState = [...state];
  
  switch (action.type) {
    case ADD_COORDS:
      newState[0].coords = action.payload;
      return newState;
    case ADD_SITE_INFO:
      newState[0].info.address = action.payload;
      return newState;
    case ADD_NAME_AND_DESCRIPTION:
      newState[0].info.name = action.payload.name;
      newState[0].info.description = action.payload.description;
      return newState;
    case CONTINUE_TO_SAVEFORM:
      newState[1].continue = true;
      return newState;
    case BACK_TO_SAVEMARKER:
      newState[1].continue = false;
      return newState;
    case CLEAR_SITE_INFO:
      return initialState;
    default:
      return state;
  }
}

// Action Creators
export function addCoords(coords) {
  return { type: ADD_COORDS, payload: coords };
}

export function addSiteInfo(data) {
  return { type: ADD_SITE_INFO, payload: data };
}

export function continueToSaveForm() {
  return { type: CONTINUE_TO_SAVEFORM };
}

export function backToSaveMarker() {
  return { type: BACK_TO_SAVEMARKER };
}

export function addNameAndDescription(data) {
  return { type: ADD_NAME_AND_DESCRIPTION, payload: data };
}

export function clearSiteInfo() {
  return { type: CLEAR_SITE_INFO };
}