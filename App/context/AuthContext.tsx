import React, { createContext, useReducer } from 'react';
import {
  AuthAction,
  AuthActionKind,
  AuthContextType,
  AuthState,
} from '../@types/auth.ts';

export const AuthContext = createContext<AuthContextType | null>(null);

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionKind.ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case AuthActionKind.ADD_ERROR:
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
    errMessage: '',
  });

  const signIn = async (login: string, password: string) => {
    console.log('signIn');
  };

  const signUp = async (login: string, password: string) => {
    console.log('signUp');
  };

  const signOut = async () => {
    console.log('signOut');
  };

  const autoSignIn = async () => {
    console.log('autoSignIn');
  };

  return (
    <AuthContext.Provider
      value={{ state, signIn, signUp, signOut, autoSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
