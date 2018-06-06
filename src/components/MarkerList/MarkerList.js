import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MapView, Marker } from 'expo';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { Drawer, Container, Header, Content, Button } from 'native-base';
import SideBar from '../SideBar/SideBar.js';
import { addMarkers, clearMarkers } from '../../state/ducks/Markers/Markers.js';
import styles from './style.js';
import firebase from 'firebase';

class MarkerList extends React.Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };
  
  handlePress = (id) => {
    this.props.own.history.push(`/viewMarker/${id}`);
  }
  
  backTOHome = () => {
    this.props.own.history.push('/');
  }
  
  componentDidMount() {
    const { currentUser } = firebase.auth();
    const { database } = firebase;
    const ref = `users/${currentUser.uid}/markers`;
    database().ref(ref).on('value', snapshot => {
      if(snapshot.val()){
        this.props.setMarkers(addMarkers(snapshot.val()));
      }
    });
  }
  
  componentWillUnmount(){
    //this.clearMarkers(clearMarkers())
  }
  
  getMarkers = () => {
    if(this.props.markers) {
      const markers = Object.keys(this.props.markers).map(marker => {
        return <View style={styles.listItem}> 
          <Text 
            key={marker}
            onPress={() => this.handlePress(marker)}
          >
            { this.props.markers[marker].info.name }
          </Text>
        </View>
      });
      
      return markers;
    }
  }
  
  render() {
    const markersList = this.getMarkers();
    
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} goHome={this.backTOHome}/>}
          onClose={() => this.closeDrawer()}>
           <Container style={styles.container}>
              <Header>
                <Container style={styles.headerContainer}>
                    <FontAwesome 
                      onPress={() => this.openDrawer()} 
                      name="bars" 
                      size={30} 
                      color="#fff" 
                    />
                    
                    <FontAwesome 
                      onPress={() => this.props.own.history.push('/saveMarker')}
                      name="plus" 
                      size={30} 
                      color="#fff" 
                    />
                </Container>
              </Header>
              
              
            <ScrollView>
              {
                this.props.markers && markersList ||
                !this.props.markers &&
                  <View style={styles.textContainer}>
                    <Text>
                      Você não tem pontos salvados, para salvar um pode fazer click no boton 
                    </Text>
                    
                    <FontAwesome onPress={() => this.props.own.history.push('/saveMarker')}name="plus" size={20} color="#000" />
                  </View>
              }
            </ScrollView>
          </Container>
        </Drawer>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    markers: state.markers,
    own: ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMarkers: actionCreator => {
      dispatch(actionCreator);
    },
    clearMarkers: actionCreator => {
      dispatch(actionCreator);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkerList);
