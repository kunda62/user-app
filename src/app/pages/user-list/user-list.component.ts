import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TimeslotsGroup } from './user-list.group';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddApointmentFacade } from './user-list.facade';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/action';
import { selectAllUsers } from '../../store/selectors';


@Component({
  selector: 'app-add-apointment',
  providers:[TimeslotsGroup, AddApointmentFacade],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class AddApointmentComponent implements OnInit { 
  form: FormGroup;
  users: any[] = [];
  users$: Observable<any>
  constructor(
    private _group: TimeslotsGroup,
    private _facade: AddApointmentFacade,
    private _router: Router,
    private _store: Store<any>) {

    this.form = this._group.form;
    this.users$ = this._store.select(selectAllUsers);
  }

  ngOnInit(): void {   

    this._store.dispatch(loadUsers());
    
  }

  navigateToEdit(user: any): void {
    this._router.navigate(['home','edit', user]);
  }

  deleteUser(id: number) {
    this._facade.deleteUser(id);
  }

  navigateToCreate(): void {
    this._router.navigate(['create']);
  }
}
