import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] login', props<{ username: string; password: string }>());;
export const loginComplete = createAction('[Auth] loginComplete');

export const checkAuth = createAction('[Auth] checkAuth');
export const checkAuthComplete = createAction('[Auth] checkAuthComplete', props<{ isLoggedIn: boolean }>());

export const logout = createAction('[Auth] logout');
export const logoutComplete = createAction('[Auth] logoutComplete');
