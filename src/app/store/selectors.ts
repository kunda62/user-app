import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './reducers';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state) => state.users
);