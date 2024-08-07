import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './screens/Signin.tsx';
import { SafeAreaView, StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(21, 22, 25)' }}>
      <StatusBar barStyle="light-content" />
      <Signin />
    </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
