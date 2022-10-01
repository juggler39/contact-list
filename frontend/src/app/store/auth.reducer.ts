import { createReducer, on } from '@ngrx/store';
import { loginComplete, logout } from './auth.actions';

export const initialAuthState = {
  isLoggedIn: false
};

export const authReducer = createReducer(
  initialAuthState,

  on(loginComplete, () => { return { isLoggedIn: true } }),
  on(logout, () => { return { isLoggedIn: false } }),
);
