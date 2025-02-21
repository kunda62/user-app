

import { Injectable, OnDestroy } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { select, Store } from "@ngrx/store";
import { createUser } from "../../store/action";

@Injectable()
export class CreateUserFacade implements OnDestroy {
  updateUser$: Subject<any> = new Subject<any>();

  // unsubscribe cleaner
  private _unsubscribe$ = new Subject<void>();

  constructor(private _dataStore: Store<any>) {}

  // Dispatch the update user action
  createUser(user: any): void {
    this._dataStore.dispatch(createUser({ user }));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
