import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { createUser, createUserSuccess, deleteUser, deleteUserSuccess, loadUsers, loadUsersSuccess, updateUser, updateUserSuccess, userOperationFailure } from './action';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UserServices } from './services';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this._service.getAllUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) =>
            of(userOperationFailure({ error: error.message }))
          )
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap(({ user }) =>
        this._service.updateUser(user).pipe(
          tap(() => this._router.navigate(['home'])),
          map(() => updateUserSuccess({user: user})),
          catchError((err) => of(userOperationFailure({ error: err.message }))) // Handle the update error
        )
      )
    )
  );

  deletUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap(({ id }) =>
        this._service.deleteUser$(id).pipe(
          tap(() => loadUsers()),
          map(() => deleteUserSuccess({ id })),
          catchError((err) => of(userOperationFailure({ error: err.message }))) // Handle the update error
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      switchMap(({ user }) =>
        this._service.createUser(user).pipe(
          tap(() => this._router.navigate(['home'])),
          map(() => createUserSuccess({user: user})),
          catchError((err) => of(userOperationFailure({ error: err.message }))) // Handle the update error
        )
      )
    )
  );

  constructor(
    private actions$: Actions, 
    private _service: UserServices,
    private _router: Router
  ) {}
}