// action.ts
import { createAction, props } from '@ngrx/store';
import { Users } from './user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: any }>());
export const userOperationFailure = createAction('[User] Operation Failure', props<{ error: string }>());


export const updateUser = createAction('[User] Update User', props<{ user: Users }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: Users }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: number }>());

export const createUser = createAction('[User] Create User', props<{ user: Users }>());
export const createUserSuccess = createAction('[User] Create User Success', props<{ user: Users }>());