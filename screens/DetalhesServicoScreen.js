import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetalhesServicoScreen({ route, navigation }) {
  const servico = route.params?.servico;

  const imagensServicos = {
    'Reparos Elétricos': require('../assets/eletrica.jpg'),
    'Hidráulica': require('../assets/hidraulica.jpg'),
    'Pintura': require('../assets/pintura.jpg'),
    'Montagem de Móveis': require('../assets/moveis.jpg'),
    'Troca de Fechaduras': require('../assets/fechadura.jpg'),
  };

  const imagemFundo = imagensServicos[servico?.nome] || null;

  const handleContato = () => {
    const telefone = '32999120927';
    const mensagem = `Olá, estou interessado no serviço de ${servico?.nome}. Podemos conversar?`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  const handleAgendar = () => {
    navigation.navigate('AgendamentoScreen', { servicoSelecionado: servico?.nome });
  };

  const Conteudo = (
    <>
      <Text style={styles.titulo}>{servico?.nome || 'Serviço'}</Text>
      <Text style={styles.descricao}>{servico?.descricao || 'Descrição não disponível'}</Text>
      <Text style={styles.orcamentoTexto}>Solicite um orçamento agora mesmo</Text>

      <TouchableOpacity style={styles.botao} onPress={handleContato}>
        <Text style={styles.botaoTexto}>Contato</Text>
      </TouchableOpacity>

      {/* Novo botão para selecionar e agendar */}
      <TouchableOpacity style={[styles.botao, { backgroundColor: '#28a745' }]} onPress={handleAgendar}>
        <Text style={styles.botaoTexto}>Selecionar e Agendar</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      {imagemFundo ? (
        <ImageBackground source={imagemFundo} style={styles.backgroundImage} resizeMode="cover">
          <View style={styles.overlay}>{Conteudo}</View>
        </ImageBackground>
      ) : (
        <View style={[styles.overlay, { backgroundColor: '#ccc' }]}>{Conteudo}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: { fontSize: 30, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  descricao: { fontSize: 18, textAlign: 'center', color: '#fff', marginBottom: 30 },
  orcamentoTexto: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
