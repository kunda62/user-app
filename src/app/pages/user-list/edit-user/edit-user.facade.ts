

import { Injectable, OnDestroy } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { catchError, map, switchMap, takeUntil, tap } from "rxjs/operators";
import { EditUserService } from "./edit-user.service";
import { select, Store } from "@ngrx/store";
import { selectAllUsers } from "../../../store/selectors";
import { updateUser } from "../../../store/action";

@Injectable()
export class EditUserFacade implements OnDestroy {
  updateUser$: Subject<any> = new Subject<any>();

  // unsubscribe cleaner
  private _unsubscribe$ = new Subject<void>();

  constructor(private _service: EditUserService, private _dataStore: Store<any>) {}

  // Dispatch the update user action
  updateUser(user: any): void {
    this._dataStore.dispatch(updateUser({ user }));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
