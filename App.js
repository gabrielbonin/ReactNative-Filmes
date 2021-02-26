
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import api from './src/services/api';


class App extends Component{

  componentDidMount(){
    const response = api.get('https://sujeitoprogramador.com/r-api/?api=filmes')
  }

  render(){
    return(
      <View></View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default App;
