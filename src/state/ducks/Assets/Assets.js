//ezpeed/Assets.js

//actions
export const ASSETS_READY = 'ezpeed/Assets/ASSETS_READY';
export const ASSETS_NOT_READY = 'ezpeed/Assets/ASSETS_NOT_READY';

//reducer   
export default function reducer(state = true, action){
  switch (action.type) {
    case ASSETS_READY:
      return true;
    case ASSETS_NOT_READY:
      return false;
    default:
      return state;
  }
}

// Action Creators
export function assetsReady() {
  return { type: ASSETS_READY };
}

export function assetsNotReady() {
  return { type: ASSETS_NOT_READY };
}