import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import LineStatusResultsPage from './components/LineStatusResultsPage';

const Stack = createNativeStackNavigator<StackList>();

type StackList = {
  Home: undefined;
  LineStatus: undefined;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="LineStatus"
          component={LineStatusResultsPage}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
