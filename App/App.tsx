import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './screens/Signin.tsx';
import { StatusBar } from 'react-native';
import {
  AuthContext,
  Provider as AuthProvider,
} from './context/AuthContext.tsx';
import { AuthContextType } from './@types/auth.ts';
import Income from './screens/Income.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Expenses from './screens/Expenses.tsx';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Signup from './screens/Signup.tsx';
import {
  RootStackParamList,
  TabNavigationParamList,
} from './@types/navigation.ts';
import ForgotPassword from './screens/ForgotPassword.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabNavigationParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#292929',
          borderTopWidth: 0,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
      }}>
      <Tab.Screen name="Income" component={Income} />
      <Tab.Screen name="Expenses" component={Expenses} />
    </Tab.Navigator>
  );
};

const App = () => {
  const { state } = useContext(AuthContext) as AuthContextType;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {state.token === null ? (
          <>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        ) : (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  useEffect(() => {
    changeNavigationBarColor('#292929');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgb(21, 22, 25)" />
      <AuthProvider>
        <App />
      </AuthProvider>
    </>
  );
};
