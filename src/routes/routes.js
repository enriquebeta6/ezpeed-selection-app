import React from 'react';
import { connect } from 'react-redux';

import {
  NativeRouter,
  Route,
  Link,
  Switch
} from 'react-router-native';

//Components
import InitialHome from '../components/InitialHome/InitialHome.js';
import Home from '../components/Home/Home.js';
import Login from '../components/Login/Login.js';
import Register from '../components/Register/Register.js';
import SaveMarker from '../components/SaveMarker/SaveMarker.js';
import MarkerList from '../components/MarkerList/MarkerList.js';
import ViewMarker from '../components/viewMarker/ViewMarker.js';

const Routes = (props) => {
  const home = props.isAuth ? Home : InitialHome;
  
  return (
    <NativeRouter>
      <Switch>
        <Route exact path='/' component={home} />
        <Route exact path='/login' component={Login} />}
        <Route exact path='/register' component={Register} />
        <Route exact path='/saveMarker' component={SaveMarker} />
        <Route exact path='/markerList' component={MarkerList} />
        <Route exact path='/viewMarker/:id' component={ViewMarker} />
      </Switch>
    </NativeRouter>
  ); 
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth.token,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setToken: (actionCreator) => {
      dispatch(actionCreator);
    },
    removeToken: (actionCreator) => {
      dispatch(actionCreator);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);