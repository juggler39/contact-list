import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] login', props<{ username: string; password: string }>());
export const loginComplete = createAction('[Auth] login Complete');
export const loginError = createAction('[Auth]  login Error', props<{ message: string }>());

export const checkAuth = createAction('[Auth] checkAuth');
export const logout = createAction('[Auth] logout');
export const logoutComplete = createAction('[Auth] logout Complete');
