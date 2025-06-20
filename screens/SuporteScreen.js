import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function SuporteScreen({ navigation }) {
  const telefoneSuporte = '32999999999'; // Número fictício
  const chatSuporte = 'https://wa.me/32999999999'; // Link fictício para WhatsApp

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Precisa de Ajuda?</Text>
      <Text style={styles.texto}>Entre em contato com nosso suporte.</Text>

      {/* Botão para ligação */}
      <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(`tel:${telefoneSuporte}`)}>
        <Text style={styles.botaoTexto}>📞 Ligar para o Suporte</Text>
      </TouchableOpacity>

      {/* Botão para chat online (WhatsApp) */}
      <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(chatSuporte)}>
        <Text style={styles.botaoTexto}>💬 Chat Online</Text>
      </TouchableOpacity>

      {/* Botão de Voltar */}
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltarBotao: {
    marginTop: 20,
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
