

import { Injectable, OnDestroy } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { catchError, map, switchMap, takeUntil, tap } from "rxjs/operators";
import { AddApointmentService } from "./user-list.service";
import { select, Store } from "@ngrx/store";
import { deleteUser, loadUsers } from "../../store/action";
import { selectAllUsers } from "../../store/selectors";

@Injectable()
export class AddApointmentFacade implements OnDestroy {
  getApointments$: Subject<any> = new Subject<any>();

  // unsubscribe cleaner
  private _unsubscribe$ = new Subject<void>();

  constructor( private _dataStore: Store<any>,
  ) {}

  loadUsers$(): Observable<any> {
    return this.getApointments$.pipe(
      takeUntil(this._unsubscribe$),
      tap(() => this.dispachLoad()),
      switchMap(() =>
        this._dataStore.pipe(
          select(selectAllUsers),
          map((data: any): any => data)
        )
      )
    );
  }

  get getAllUsers$(): Observable<any> {
    return this._dataStore.select(selectAllUsers);
  }

  dispachLoad(): void {
    console.log('dispach load');
    
    this._dataStore.dispatch(loadUsers());
  }

  deleteUser(id: number): void {
    this._dataStore.dispatch(deleteUser({ id }))
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
