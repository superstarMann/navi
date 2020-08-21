import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import axios from 'axios';
import Map from './Map';

const API_KEY = "a84dbb1bdb826d311d32c3afb52873ce";
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );   
     this.setState({ isLoading: false, lon: data.coord.lon})
  };
  getLocation = async () => {  
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    }
    catch (error) {
     Alert.alert(`Can't find you😅😅`)
    }
    };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, lon} = this.state;
    return isLoading ? <Loading /> : <Map lon={lon}/>;
  }
}