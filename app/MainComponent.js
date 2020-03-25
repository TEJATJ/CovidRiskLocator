import React, { Component } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import Animation from 'lottie-react-native';
import anim from './assets/17699-covid-19.json';
import Geolocation from 'react-native-geolocation-service';
import DeviceInfo from 'react-native-device-info';
import styles, { PRIMARY_COLORS, BACKGROUNDS } from './styles'
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      error: "",
    };

  }
  getLocation = () => { // Change the function so it has access to the outer scope
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Covid Tracker',
        'message': 'Please Enable Your Location Services'
      }
    ).then(granted => {
      if (granted) {
        Geolocation.watchPosition(
          (position) => {
            this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 200 }
        );
      }
    })

  }
  updateApi = () => {
    let uniqueId = DeviceInfo.getUniqueId();



  }
  componentDidMount() {
    this.animation.play();
    // geolocation.requestAuthorization();
    this.getLocation();
  }
  render() {
    return (
      <View style={_styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={_styles.welcome}>ID</Text>
          <Text style={[_styles.welcome, { fontWeight: 'normal', marginTop: -5, color: PRIMARY_COLORS.PRIMARY_LINKS.DEFAULT }]}>AHUQFG</Text>
          <Text style={[_styles.welcome, { marginTop: 20 }]}>RISK STATUS</Text>
          <Text style={[_styles.welcome, { fontWeight: 'normal', marginTop: -5, color: PRIMARY_COLORS.PRIMARY_LINKS.DEFAULT }]}>Normal</Text>
          {/* <View style={[styles.row, styles.fullFlex]}>
            <View style={[styles.fullFlex, styles.alignCenter, styles.justifyCenter]}>
              <Text style={[_styles.welcome, { fontWeight: 'normal', marginTop: -5, color: PRIMARY_COLORS.PRIMARY_LINKS.DEFAULT }]}>Active Cases NearBy</Text>
            </View>
            <View style={[styles.fullFlex, styles.alignCenter, styles.justifyCenter]}></View>
          </View> */}
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 450,
              height: 450,
            }}
            loop={true}
            source={anim}
          />

        </View>

      </View>
    );
  }
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUNDS.DARK.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Roboto',
    color: '#ffffff',
    fontWeight: 'bold'
  }
});