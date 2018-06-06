import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import isAuth from '../ducks/Auth/Auth.js';
import userPosition from '../ducks/UserPosition/UserPosition.js';
import marker from '../ducks/Marker/Marker.js';
import markers from '../ducks/Markers/Markers.js';
import login from '../ducks/Login/Login.js';

const rootReducer = combineReducers({
    isAuth,
    userPosition,
    marker,
    markers,
    login,
    form: formReducer
})

export default rootReducer;