import { createReducer, on } from '@ngrx/store';
import { Users, UserState } from './user.model';
import {
  createUser,
  createUserSuccess,
  deleteUserSuccess,
  loadUsers,
  loadUsersSuccess,
  updateUser,
  updateUserSuccess,
  userOperationFailure } from './action';

const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,

  // Load list of users
  on(loadUsers, (state) => {
    return {
      ...state
    }; 
  }),

  // Load list of users success
  on(loadUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users
    };
  }),
  
  on(updateUser, (state, { user }) => {
    return {
      ...state,
      user: user
    }
  }),

  on(updateUserSuccess, (state, { user }) => {
    return {
      ...state,
      user: user
    }
  }),

  on(deleteUserSuccess, (state, { id }) => {
    const removeUser = state.users.filter((user) => user.id !== id);
    
    return {
      ...state,
      users: removeUser
    }
  }),

  on(userOperationFailure, (state, {error}) => {
    return {
      ...state,
      error: error
    }
  }),

  on(createUser, (state, { user }) => {
    return {
      ...state,
      user: user
    }
  }),

  on(createUserSuccess, (state, { user }) => {
    return {
      ...state,
      user: user
    }
  })
);