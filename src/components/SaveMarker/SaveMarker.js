import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MapView, Marker } from 'expo';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Container, Header, Content,Button } from 'native-base';
import SideBar from '../SideBar/SideBar.js';
import { 
  addCoords, 
  addSiteInfo, 
  clearSiteInfo, 
  addNameAndDescription,
  continueToSaveForm,
  backToSaveMarker
} from '../../state/ducks/Marker/Marker.js';
import { addMarkers } from '../../state/ducks/Markers/Markers.js';
import SaveMarkerForm from '../SaveMarkerForm/SaveMarkerForm.js';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase';
import styles from './style.js';

class SavePoints extends React.Component {
  
  handlePressMap = (event) => {
    const { coordinate }= event.nativeEvent;
    const apiKey = 'AIzaSyDSVAAhml7QOk7Nqi1nSywQfiS5LOqinRU';
    const lat = coordinate.latitude;
    const lng = coordinate.longitude;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
    
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        
        const latitudeDelta = Number(response.results[0].geometry.viewport.northeast.lat) - Number(response.results[0].geometry.viewport.southwest.lat)
        const longitudeDelta = Number(response.results[0].geometry.viewport.northeast.lng) - Number(response.results[0].geometry.viewport.southwest.lng)
        
        const coords = {...coordinate, latitudeDelta, longitudeDelta};
        
        this.props.setMarker(addCoords(coords));
        this.props.setSiteInfo(addSiteInfo(response.results[0].formatted_address))
      });
  }
  
  handlePress = () => {
    if (this.props.coords){
      this.props.continueToSaveForm(continueToSaveForm());
    }
  }
  
  saveMaker = (values) => {
    this.props.setNameAndDescription(addNameAndDescription(values));
  }
  
  closeDrawer = () => {
      this.drawer._root.close()
  };
   
  openDrawer = () => {
      this.drawer._root.open()
  }; 
  
  componentWillUnmounte(){
    this.props.clearSiteInfo(clearSiteInfo());
  }
  
  backTOHome = () => {
    this.props.own.history.push('/');
  }
   
  componentWillReceiveProps(nextProps) {
    if (nextProps.marker[0].info.name !== '') {
      const { currentUser } = firebase.auth();
      const { database } = firebase;
      const ref = `users/${currentUser.uid}/markers`;
      const { key } = database().ref(ref).push();
      database().ref(ref).child(key).set(nextProps.marker[0]);
      this.props.own.history.push('/markerList');
    }
  }

  render() {
    const { coords } = this.props;
    const { latitude, longitude } = coords;
    
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
            style={{ flex: .6}}
            region={this.props.userPosition.coords}
            onPress={this.handlePressMap}
            showsUserLocation
          >
            { 
              coords && 
              <MapView.Marker 
                coordinate={{latitude, longitude}}
              />
            }
          </MapView>
          
          {
            !this.props.continue &&
              <ScrollView style={styles.infoContainer}>
                <View style={styles.info}>
                  <Text style={{color: '#000'} }>
                    <Text style={{color: '#d64747'} }>Endereço:</Text> {this.props.infoSite}
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
                
                <TouchableOpacity onPress={this.handlePress}>
                  <Text style={styles.btnAdd}>Add Point</Text>
                </TouchableOpacity>
              </ScrollView>
          }
          
          {
            this.props.continue &&
              <SaveMarkerForm 
                save={this.saveMaker} 
                back={() => {
                  this.props.backToSaveMarker(backToSaveMarker());
                }}
              />
          }
        
        </Container>
      </Drawer>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.marker)
  return {
    coords: state.marker[0].coords,
    infoSite: state.marker[0].info.address,
    marker: state.marker,
    own: ownProps,
    continue: state.marker[1].continue,
    userPosition: state.userPosition
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
    },
    continueToSaveForm: (actionCreator) => {
      dispatch(actionCreator);
    },
    backToSaveMarker: (actionCreator) => {
      dispatch(actionCreator);
    },
    setNameAndDescription: (actionCreator) => {
      dispatch(actionCreator);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavePoints);