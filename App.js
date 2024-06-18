import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Restaurantes from './screens/Restaurantes';
import AtividadeArLivre from './screens/AtividadeArLivre';
import PontosHistoricos from './screens/PontosHistoricos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Menu Principal" component={HomeScreen} />
        <Stack.Screen name="Pontos Historicos" component={PontosHistoricos} />
        <Stack.Screen name="Restaurantes Recomendados" component={Restaurantes} />
        <Stack.Screen name="Atividade ao Ar Livre" component={AtividadeArLivre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

