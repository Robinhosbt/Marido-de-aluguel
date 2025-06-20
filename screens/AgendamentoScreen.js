import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function AgendamentoScreen({ route, navigation }) {
  const { servicoSelecionado } = route.params || {};

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');

  const formatarData = (texto) => {
    let v = texto.replace(/\D/g, '').slice(0, 8);
    if (v.length >= 5) v = v.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
    else if (v.length >= 3) v = v.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    setData(v);
  };

  const formatarHora = (texto) => {
    let v = texto.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.replace(/(\d{2})(\d{1,2})/, '$1:$2');
    setHora(v);
  };

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
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert('Erro ao buscar o CEP.');
    }
  };

  const confirmarAgendamento = async () => {
    if (!data || !hora || !cep || !endereco || !numeroCasa) {
      Alert.alert('Erro', 'Preencha todos os campos e busque o endereço.');
      return;
    }

    // Validação de formato básico
    const partes = data.split('/');
    if (partes.length !== 3) {
      Alert.alert('Data inválida', 'Informe a data no formato DD/MM/AAAA.');
      return;
    }

    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const ano = parseInt(partes[2]);

    const dataInformada = new Date(`${ano}-${mes}-${dia}T00:00:00`);
    const dataInvalida =
      isNaN(dataInformada.getTime()) ||
      dataInformada.getDate() !== dia ||
      dataInformada.getMonth() + 1 !== mes ||
      dataInformada.getFullYear() !== ano;

    if (dataInvalida) {
      Alert.alert('Data inválida', 'Informe uma data real do calendário.');
      return;
    }

    // Validação se está no passado
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataInformada < hoje) {
      Alert.alert('Data inválida', 'Não é permitido agendar para datas passadas.');
      return;
    }

    const enderecoCompleto = `${endereco.logradouro}, ${numeroCasa}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;

    const novoAgendamento = {
      id: Date.now().toString(),
      prestador: 'Carlos Silva',
      servico: servicoSelecionado || 'Serviço não informado',
      data,
      hora,
      endereco: enderecoCompleto,
    };

    try {
      const armazenado = await AsyncStorage.getItem('@agendamentos');
      const lista = armazenado ? JSON.parse(armazenado) : [];
      lista.push(novoAgendamento);
      await AsyncStorage.setItem('@agendamentos', JSON.stringify(lista));

      navigation.navigate('Pagamento', novoAgendamento);
    } catch (error) {
      Alert.alert('Erro ao salvar agendamento.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <Text style={styles.titulo}>Agendar Serviço</Text>

        <Text style={styles.label}>Serviço:</Text>
        <Text style={styles.valor}>{servicoSelecionado || 'Não informado'}</Text>

        <TextInput
          style={styles.input}
          placeholder="Data (DD/MM/AAAA)"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={data}
          onChangeText={formatarData}
        />

        <TextInput
          style={styles.input}
          placeholder="Hora (HH:MM)"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={hora}
          onChangeText={formatarHora}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          placeholderTextColor="#666"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
          maxLength={8}
        />

        <TextInput
          style={styles.input}
          placeholder="Número "
          placeholderTextColor="#666"
          value={numeroCasa}
          onChangeText={setNumeroCasa}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botaoVerde} onPress={buscarEndereco}>
          <Text style={styles.botaoTexto}>Buscar Endereço</Text>
        </TouchableOpacity>

        {endereco && (
          <View style={styles.enderecoBox}>
            <Text>{endereco.logradouro}</Text>
            <Text>{endereco.bairro}</Text>
            <Text>{endereco.localidade} - {endereco.uf}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.botao} onPress={confirmarAgendamento}>
          <Text style={styles.botaoTexto}>Confirmar Agendamento</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbe3eb',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  valor: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoVerde: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enderecoBox: {
    width: '100%',
    backgroundColor: '#e9f7ef',
    borderLeftWidth: 5,
    borderLeftColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
