import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PerfilPrestadorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem do Prestador em tamanho maior */}
      <Image
        source={require('../assets/prestadordeservico.png')}
        style={styles.foto}
      />

      <Text style={styles.nome}>Carlos Silva</Text>
      <Text style={styles.especialidade}>Especialista em serviços gerais</Text>

      {/* ✅ Botão redirecionando para a tela de Pagamento */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pagamento')}>
        <Text style={styles.botaoTexto}>Contratar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltarBotao} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarTexto}>◀ Voltar</Text>
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
  foto: {
    width: 220,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  especialidade: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltarBotao: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 10,
  },
  voltarTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
  