import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const servicos = [
    {
      id: '1',
      nome: 'Reparos Elétricos',
      descricao: 'Serviço de manutenção, instalação e reparos elétricos em geral. Ideal para resolver problemas como tomadas com defeito, troca de disjuntores e instalação de luminárias.',
    },
    {
      id: '2',
      nome: 'Hidráulica',
      descricao: 'Realizamos consertos e instalações hidráulicas, como reparos em vazamentos, troca de torneiras, sifões e manutenção em encanamentos.',
    },
    {
      id: '3',
      nome: 'Pintura',
      descricao: 'Serviço de pintura residencial e comercial. Inclui preparação da superfície, aplicação de tinta e acabamento profissional.',
    },
    {
      id: '4',
      nome: 'Montagem de Móveis',
      descricao: 'Montagem de móveis planejados ou convencionais, com segurança e agilidade. Inclui guarda-roupas, estantes, camas, etc.',
    },
    {
      id: '5',
      nome: 'Troca de Fechaduras',
      descricao: 'Troca e instalação de fechaduras residenciais e comerciais. Garantia de segurança e funcionamento adequado.',
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltarBotao}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.voltarTexto}>◀ Sair</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Serviços Disponíveis</Text>

      <View style={styles.gridContainer}>
        {servicos.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.servico,
              item.id === '5' && styles.servicoFull,
            ]}
            onPress={() => navigation.navigate('DetalhesServico', { servico: item })}
          >
            <Text style={styles.servicoTexto}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.gridBotoes}>
        <TouchableOpacity
          style={styles.extraBotao}
          onPress={() => navigation.navigate('AgendamentoScreen')}
        >
          <Text style={styles.extraBotaoTexto}>🗓️ Agendar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.extraBotao}
          onPress={() => navigation.navigate('PerfilPrestador')}
        >
          <Text style={styles.extraBotaoTexto}>👨‍🔧 Prestador</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.extraBotao}
          onPress={() => navigation.navigate('MeusAgendamentos')}
        >
          <Text style={styles.extraBotaoTexto}>📋 Agendamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.extraBotao}
          onPress={() => navigation.navigate('Pagamento')}
        >
          <Text style={styles.extraBotaoTexto}>💳 Pagamento</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botaoSuporte}
        onPress={() => navigation.navigate('Suporte')}
      >
        <Text style={styles.extraBotaoTexto}>📞 Suporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbe3eb',
    alignItems: 'center',
    padding: 20,
  },
  voltarBotao: {
    position: 'absolute',
    top: 50,
    left: 10,
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    elevation: 5,
  },
  voltarTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 30,
  },
  servico: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '45%',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  servicoFull: {
    width: '93%',
  },
  servicoTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  gridBotoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  extraBotao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  botaoSuporte: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    width: '93%',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  extraBotaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
