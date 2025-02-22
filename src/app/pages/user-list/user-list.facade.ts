

import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import {  Store } from "@ngrx/store";
import { deleteUser, loadUsers } from "../../store/action";

@Injectable()
export class AddApointmentFacade implements OnDestroy {

  // unsubscribe cleaner
  private _unsubscribe$ = new Subject<void>();

  constructor( private _dataStore: Store<any>,
  ) {}


  dispachLoad(): void {
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
