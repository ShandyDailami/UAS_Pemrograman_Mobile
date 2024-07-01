import React from 'react';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Regis from './src/screens/Regis';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './src/components/Detail';
import Profile from './src/screens/Profile';
import NoteScreen from './src/screens/Note';

const Stack = createNativeStackNavigator()

function App() {

  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Regis' component={Regis} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Note' component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

export default App;
