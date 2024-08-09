import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './screens/Signin.tsx';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  AuthContext,
  Provider as AuthProvider,
} from './context/AuthContext.tsx';
import { AuthContextType } from './@types/auth.ts';
import Income from './screens/Income.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  const { state } = useContext(AuthContext) as AuthContextType;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(21, 22, 25)' }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {state.token === null ? (
            <Stack.Screen name="Signin" component={Signin} />
          ) : (
            <Stack.Screen name="Income" component={Income} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgb(21, 22, 25)" />
      <AuthProvider>
        <App />
      </AuthProvider>
    </>
  );
};
