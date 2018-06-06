import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MapView, Marker, Location, Permissions } from 'expo';
import firebase from 'firebase';

import { FontAwesome } from '@expo/vector-icons';
import {Drawer, Container, Header, Content,Button } from 'native-base';
import { userPosition, setUserCoords, isFetching, isNotFetching } from '../../state/ducks/UserPosition/UserPosition.js';

import SideBar from '../SideBar/SideBar.js';
import regionFrom from '../../lib/calcRegion.js';
import styles from './style.js';

class Home extends React.Component {
  componentWillMount() {
    this._getLocationAsync();
  }
  
  backTOHome = () => {
    this.props.own.history.push('/');
  }
  
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({});
    
    const { latitude, longitude, accuracy } = location.coords;
    const apiKey = 'AIzaSyDSVAAhml7QOk7Nqi1nSywQfiS5LOqinRU';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const latitudeDelta = Number(response.results[0].geometry.viewport.northeast.lat) - Number(response.results[0].geometry.viewport.southwest.lat);
        const longitudeDelta = Number(response.results[0].geometry.viewport.northeast.lng) - Number(response.results[0].geometry.viewport.southwest.lng);
        
        const coords = {
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta
        };
        
        this.props.isFetching(isNotFetching());
        this.props.setUserPosition(
          userPosition(response.results[0].formatted_address)
        );
        this.props.setUserCoords(
          setUserCoords(coords)
        );
      });
    
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    const { currentUser } = firebase.auth();
    const { coords } = this.props;
    
    return (
        <View style={{flex: 1}}>
           <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<SideBar navigator={this.navigator} goHome={this.backTOHome}/>}
              onClose={() => this.closeDrawer()}
           >
            <Container style={styles.container}>
              <Header>
                <Container style={styles.headerContainer}>
                    <FontAwesome 
                      onPress={() => this.openDrawer()} 
                      name="bars" 
                      size={30} 
                      color="#fff" 
                    />
                </Container>
              </Header>
              
              <MapView
                style={{flex: .8,}}
                rengion={this.props.coords}
                showsUserLocation
                showsMyLocationButton	
              />
              {
                !this.props.fetching &&
                  <ScrollView style={styles.infoContainer}>
                    <View style={styles.info}>
                      <Text style={{color: '#000'} }>
                        <Text style={{color: '#d64747'} }>Endereço: </Text> 
                        {this.props.info}
                      </Text>
                    </View>
                    
                    <View style={styles.info}>
                      <Text style={{color: '#000'} }>
                        <Text style={{color: '#d64747'} }>Lat: </Text> 
                        {this.props.coords.latitude}
                      </Text>
                    </View>
    
                    <View style={styles.info}>
                      <Text style={{color: '#000'} }>
                        <Text style={{color: '#d64747'} }>Lng: </Text> 
                        {this.props.coords.longitude}
                      </Text>
                    </View>
                    
                    <View style={styles.info}>
                      <Text style={{color: '#000'} }>
                        <Text style={{color: '#d64747'} }>Nome: </Text> {currentUser && currentUser.displayName}
                      </Text>
                    </View>
                    
                    <View style={styles.info}>
                      <Text style={{color: '#000'} }>
                        <Text style={{color: '#d64747'} }>Email: </Text> {currentUser && currentUser.email} 
                      </Text>
                    </View>
                  </ScrollView>
              }
              
              {
                this.props.fetching &&
                  <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#d64747" />
                  </View>
              }
            </Container>
          </Drawer>
        </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.userPosition.info,
    coords: state.userPosition.coords,
    own: ownProps,
    fetching: state.userPosition.fetching
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setUserPosition: (actionCreator) => {
      dispatch(actionCreator);
    },
    removeUserPosition: (actionCreator) => {
      dispatch(actionCreator);
    },
    setUserCoords: (actionCreator) => {
      dispatch(actionCreator);
    },
    isFetching: (actionCreator) => {
      dispatch(actionCreator);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);