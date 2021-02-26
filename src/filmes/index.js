import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Filmes extends Component{
  render(){
    return(
      <View>

      <View style={styles.card}>
        <Text style={styles.titulo}>
          {this.props.data.nome}</Text>
          <Image source={{uri: this.props.data.foto}} style={styles.capa}></Image>
      </View>
      <View style={styles.Areabotao}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Leia mais..</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}
export default Filmes;

const styles = StyleSheet.create({

});