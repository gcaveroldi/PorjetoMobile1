import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Restaurantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Endereços Estabelecimentos</Text>
      <Text style={styles.item}>Restaurante 1: Tipo de culinária, faixa de preço...</Text>
      <Text style={styles.item}>Restaurante 2: Tipo de culinária, faixa de preço...</Text>
      {/* Adicione mais restaurantes conforme necessário */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});
