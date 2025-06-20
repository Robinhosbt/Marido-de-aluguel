import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResumoScreen({ route, navigation }) {
  const { prestador, servico, data, hora, endereco, observacao, metodo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo da Contratação</Text>
      <Text style={styles.item}><Text style={styles.label}>Prestador:</Text> {prestador}</Text>
      <Text style={styles.item}><Text style={styles.label}>Serviço:</Text> {servico}</Text>
      <Text style={styles.item}><Text style={styles.label}>Data:</Text> {data}</Text>
      <Text style={styles.item}><Text style={styles.label}>Hora:</Text> {hora}</Text>
      <Text style={styles.item}><Text style={styles.label}>Endereço:</Text> {endereco}</Text>
      {metodo && <Text style={styles.item}><Text style={styles.label}>Pagamento:</Text> {metodo}</Text>}
      {observacao && <Text style={styles.item}><Text style={styles.label}>Observações:</Text> {observacao}</Text>}

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.botaoTexto}>Voltar à Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f4f8' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { fontSize: 18, marginBottom: 10 },
  label: { fontWeight: 'bold' },
  botao: {
    marginTop: 30,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
