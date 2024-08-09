export enum AuthActionKind {
  ADD_TOKEN = 'ADD_TOKEN',
  ADD_ERROR = 'ADD_ERROR',
}

export interface AuthState {
  token: string | null;
  errMessage: string;
}

export interface AuthAction {
  type: AuthActionKind;
  payload: string;
}

export type AuthContextType = {
  state: AuthState;
  signIn: (login: string, password: string) => Promise<void>;
  signUp: (login: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  autoSignIn: () => Promise<void>;
};
