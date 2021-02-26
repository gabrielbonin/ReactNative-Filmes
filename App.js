
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import api from './src/services/api';
import Filmes from './src/filmes';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      filmes: []
    };
  }

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data //requisicoes do axios é pelo data
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.filmes}
        keyExtractor={item => item.id.toString()} //string
        renderItem={({item})=> <Filmes data={item}/>}
        >
          
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

export default App;
