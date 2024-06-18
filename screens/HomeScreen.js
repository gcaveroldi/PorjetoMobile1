import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const localImage = require('./imagenhist.jpg');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GUIA TURÍSTICO</Text>  
      <Image 
        source={localImage} 
        style={styles.image} 
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Pontos Historicos')}
      >
        <Text style={styles.buttonText}>Pontos Históricos</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Restaurantes Recomendados')}
      >
        <Text style={styles.buttonText}>Restaurantes Recomendados</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Atividade ao Ar Livre')}
      >
        <Text style={styles.buttonText}>Atividades ao Ar Livre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginVertical: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
