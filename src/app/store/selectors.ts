import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.model';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state) => state.users
);