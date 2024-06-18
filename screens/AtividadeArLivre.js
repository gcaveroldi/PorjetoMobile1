import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AtividadeArLivre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugestões</Text>
      <Text style={styles.item}>Atividade 1: Descrição breve...</Text>
      <Text style={styles.item}>Atividade 2: Descrição breve...</Text>
      {/* Adicione mais atividades conforme necessário */}
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
