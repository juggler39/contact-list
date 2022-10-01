import { createSelector } from '@ngrx/store';

export interface FeatureState {
  isLoggedIn: boolean;
}

export interface AppState {
  feature: FeatureState;
}

export const selectAuthState = (state: AppState) => state.feature;

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: FeatureState) => state.isLoggedIn
);
