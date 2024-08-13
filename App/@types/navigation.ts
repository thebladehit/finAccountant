import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Signin?: undefined;
  Signup?: undefined;
  ForgotPassword?: undefined;
  TabNavigation?: NavigatorScreenParams<TabNavigationParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabNavigationParamList = {
  Income: undefined;
  Expenses: undefined;
};

export type TabNavigationProps<T extends keyof TabNavigationParamList> =
  BottomTabScreenProps<TabNavigationParamList, T>;
