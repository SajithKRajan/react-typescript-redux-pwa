export enum AppActionTypes {
  INITIALIZE = "@@app/INITIALIZE",
  SET_AUTHENTICATION_DATA = "@@app/SET_AUTHENTICATION_DATA",
  CLEAR_AUTHENTICATION_DATA = "@@app/CLEAR_AUTHENTICATION_DATA",
}

export interface AuthData {
  readonly isAuthenticated: boolean;
  readonly token: string;
}

export interface AppState {
  readonly authData: AuthData;
  readonly language: string;
}
