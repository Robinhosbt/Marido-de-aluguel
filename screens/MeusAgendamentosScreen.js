import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function MeusAgendamentosScreen() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);

  const buscarEndereco = async () => {
    if (cep.length !== 8) {
      Alert.alert('CEP inválido', 'Digite um CEP com 8 dígitos.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
        return;
      }

      setEndereco(response.data);
      await AsyncStorage.setItem('@ultimo_endereco', JSON.stringify(response.data));
      Alert.alert('Endereço salvo com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao buscar o CEP.');
    }
  };

  const carregarEndereco = async () => {
    try {
      const salvo = await AsyncStorage.getItem('@ultimo_endereco');
      if (salvo) {
        setEndereco(JSON.parse(salvo));
      }
    } catch (error) {
      Alert.alert('Erro ao carregar endereço salvo.');
    }
  };

  const carregarAgendamentos = async () => {
    try {
      const dados = await AsyncStorage.getItem('@agendamentos');
      if (dados) {
        setAgendamentos(JSON.parse(dados));
      }
    } catch (error) {
      Alert.alert('Erro ao carregar agendamentos.');
    }
  };

  const cancelarAgendamento = async (id) => {
    try {
      const dados = await AsyncStorage.getItem('@agendamentos');
      if (dados) {
        const lista = JSON.parse(dados);
        const novaLista = lista.filter(item => item.id !== id);
        await AsyncStorage.setItem('@agendamentos', JSON.stringify(novaLista));
        setAgendamentos(novaLista);
        Alert.alert('Agendamento cancelado com sucesso!');
      }
    } catch (error) {
      Alert.alert('Erro ao cancelar agendamento.');
    }
  };

  useEffect(() => {
    carregarEndereco();
    carregarAgendamentos();
  }, []);

  return (
    <LinearGradient
      colors={['#f0f4f8', '#d9e4f5']} // Cores suaves
      style={styles.container}
    >
      <Text style={styles.titulo}>Meus Agendamentos</Text>

      <TextInput
        placeholder="Digite seu CEP (apenas números)"
        placeholderTextColor="#666"
        value={cep}
        onChangeText={setCep}
        style={styles.input}
        keyboardType="numeric"
        maxLength={8}
      />

      <TouchableOpacity style={styles.botao} onPress={buscarEndereco}>
        <Text style={styles.botaoTexto}>Buscar e Salvar Endereço</Text>
      </TouchableOpacity>

      {endereco && (
        <View style={styles.enderecoBox}>
          <Text style={styles.label}>Último endereço salvo:</Text>
          <Text style={styles.valor}>{endereco.logradouro}</Text>
          <Text style={styles.valor}>{endereco.bairro}</Text>
          <Text style={styles.valor}>{endereco.localidade} - {endereco.uf}</Text>
        </View>
      )}

      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.servico}>{item.servico}</Text>
            <Text style={styles.data}>Data: {item.data}</Text>
            <Text style={styles.data}>Hora: {item.hora}</Text>
            <Text style={styles.data}>Endereço: {item.endereco}</Text>
            {item.observacao ? (
              <Text style={styles.obs}>Obs: {item.observacao}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={() =>
                Alert.alert(
                  'Cancelar Agendamento',
                  'Tem certeza que deseja cancelar este agendamento?',
                  [
                    { text: 'Não', style: 'cancel' },
                    { text: 'Sim', onPress: () => cancelarAgendamento(item.id) }
                  ]
                )
              }
            >
              <Text style={styles.textoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  botao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  enderecoBox: {
    width: '100%',
    backgroundColor: '#e9f7ef',
    borderLeftWidth: 5,
    borderLeftColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  label: {
    fontWeight: 'bold',
    color: '#155724',
    marginBottom: 5
  },
  valor: {
    fontSize: 16,
    color: '#155724'
  },
  card: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  servico: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  data: {
    fontSize: 16,
    color: '#555'
  },
  obs: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    fontStyle: 'italic'
  },
  botaoCancelar: {
    marginTop: 10,
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCancelar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
