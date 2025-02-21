import { createReducer, on } from '@ngrx/store';
import { Users } from './user.model';
import {
  createUser,
  createUserSuccess,
  deleteUserSuccess,
  loadUsers,
  loadUsersSuccess,
  updateUser,
  updateUserSuccess,
  userOperationFailure } from './action';

export interface UserState {
  users: Users[]; // The users array should be part of the UserState
}

const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,

  // Load Document Center
  on(loadUsers, (state) => {
    return {
      ...state
    }; 
  }),

  // Load Document Center Success
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