import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PagamentoScreen({ navigation, route }) {
  const { prestador, servico, data, hora, endereco, observacao } = route.params || {};

  const finalizarPagamento = (metodo) => {
    navigation.navigate('Resumo', {
      prestador,
      servico,
      data,
      hora,
      endereco,
      observacao,
      metodo
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha uma forma de pagamento</Text>

      <TouchableOpacity style={styles.botao} onPress={() => finalizarPagamento('Pix')}>
        <Text style={styles.botaoTexto}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => finalizarPagamento('Cartão de Crédito')}>
        <Text style={styles.botaoTexto}>Cartão de Crédito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => finalizarPagamento('Dinheiro')}>
        <Text style={styles.botaoTexto}>Dinheiro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
