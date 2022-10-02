import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] login', props<{ username: string; password: string }>());;
export const loginComplete = createAction('[Auth] loginComplete');

export const checkAuth = createAction('[Auth] checkAuth');
export const logout = createAction('[Auth] logout');
