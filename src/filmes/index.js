import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Filmes extends Component{
  render(){
    const {nome, foto} = this.props.data;
    return(
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          {this.props.data.nome}</Text>
          <Image source={{uri: foto}} style={styles.capa}></Image>
      <View style={styles.Areabotao}>
        <TouchableOpacity style={styles.botao} onPress={()=>alert(nome)}>
          <Text style={styles.botaoTexto}>Leia mais..</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
}
export default Filmes;

const styles = StyleSheet.create({
  titulo:{
    fontSize: 20,
    padding: 15
  },
  card:{
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset:{width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 4
  },
  capa:{
    height: 250,
    zIndex: 2
  },
  Areabotao:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  botao:{
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botaoTexto:{
    textAlign: 'center',
    color: '#fff'
  }

});