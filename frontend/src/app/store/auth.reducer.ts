import { createReducer, on } from '@ngrx/store';
import { login, loginComplete, loginError, logout } from './auth.actions';

export const initialAuthState = {
  isLoggedIn: false,
  loginError: false
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state) => { return { ...state, loginError: false } }),
  on(loginComplete, (state) => { return { ...state, isLoggedIn: true } }),
  on(loginError, (state) => { return { ...state, loginError: true } }),
  on(logout, (state) => { return { ...state, isLoggedIn: false } }),
);
