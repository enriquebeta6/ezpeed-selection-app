import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MapView, Marker } from 'expo';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import {Drawer, Container, Header, Content,Button } from 'native-base';
import SideBar from '../SideBar/SideBar.js';
import { addCoords, addSiteInfo, clearSiteInfo } from '../../state/ducks/Marker/Marker.js';
import { addMarkers } from '../../state/ducks/Markers/Markers.js';

import firebase from 'firebase';
import styles from './style.js';

class ViewMarker extends React.Component {
  
  deleteMarker = () => {
    const { currentUser } = firebase.auth();
    const { database } = firebase;
    const ref = `users/${currentUser.uid}/markers`;
    database().ref(ref).child(this.props.own.match.params.id).remove();
    this.props.own.history.push('/markerList');
  }
  
  backTOHome = () => {
    this.props.own.history.push('/');
  }
  
  closeDrawer = () => {
      this.drawer._root.close()
  };
  
  openDrawer = () => {
      this.drawer._root.open()
  }; 
  
  render() {
    const { coords } = this.props.marker;
    
    return (
      <View style={{flex: 1}}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this.navigator} goHome={this.backTOHome} />}
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
            style={{ flex: .6 }}
            region={this.props.marker.coords}
            onPress={this.handlePressMap}
          >
            { 
              this.props.marker.coords && 
              <MapView.Marker 
                coordinate={this.props.marker.coords}
              />
            }
          </MapView>
            
          <ScrollView style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={{color: '#000'} }>
                <Text style={{color: '#d64747'} }>Nome:</Text> {coords && this.props.marker.info.name}
              </Text>
            </View>
            
            <View style={styles.info}>
              <Text style={{color: '#000'} }>
                <Text style={{color: '#d64747'} }>Endereço:</Text> {coords && this.props.marker.info.address}
              </Text>
            </View>
            
            <View style={styles.info}>
              <Text style={{color: '#000'} }>
                <Text style={{color: '#d64747'} }>Descripção:</Text> {coords && this.props.marker.info.description}
              </Text>
            </View>
            
            <View style={styles.info}>
              <Text style={{color: '#000'} }>
                <Text style={{color: '#d64747'} }>Lat:</Text> {coords && coords.latitude}
              </Text>
            </View>
            
            <View style={styles.info}>
              <Text style={{color: '#000'} }>
                <Text style={{color: '#d64747'} }>Lng:</Text> {coords && coords.longitude}
              </Text>
            </View>
            
            <View style={styles.btnContainer}>
              <TouchableOpacity>
                <Text style={styles.btnAdd}>Editar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={this.deleteMarker}>
                <Text style={styles.btnAdd}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Container>
      </Drawer>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const key = ownProps.match.params.id;
  return {
    marker: state.markers[key],
    own: ownProps
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setMarker: (actionCreator) => {
      dispatch(actionCreator);
    },
    setSiteInfo: (actionCreator) => {
      dispatch(actionCreator);
    },
    clearSiteInfo: (actionCreator) => {
      dispatch(actionCreator);
    },
    addMarker: (actionCreator) => {
      dispatch(actionCreator);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMarker);