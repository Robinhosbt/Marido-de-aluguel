import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AgendamentoScreen from './screens/AgendamentoScreen';
import CadastroScreen from './screens/CadastroScreen';
import DetalhesServicoScreen from './screens/DetalhesServicoScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MeusAgendamentosScreen from './screens/MeusAgendamentosScreen';
import PagamentoScreen from './screens/PagamentoScreen';
import PerfilPrestadorScreen from './screens/PerfilPrestadorScreen';
import ResumoScreen from './screens/ResumoScreen';
import SuporteScreen from './screens/SuporteScreen';

import './firebaseConfig';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Serviços' }} />
        <Stack.Screen name="DetalhesServico" component={DetalhesServicoScreen} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="AgendamentoScreen" component={AgendamentoScreen} options={{ title: 'Agendar Serviço' }} />
        <Stack.Screen name="PerfilPrestador" component={PerfilPrestadorScreen} options={{ title: 'Prestador' }} />
        <Stack.Screen name="MeusAgendamentos" component={MeusAgendamentosScreen} options={{ title: 'Meus Agendamentos' }} />
        <Stack.Screen name="Pagamento" component={PagamentoScreen} options={{ title: 'Pagamento' }} />
        <Stack.Screen name="Suporte" component={SuporteScreen} options={{ title: 'Suporte' }} />
        <Stack.Screen name="Resumo" component={ResumoScreen} options={{ title: 'Resumo da Contratação' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
