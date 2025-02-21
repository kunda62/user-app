import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserGroup } from './edit-user.group';
import { EditUserFacade } from './edit-user.facade';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  imports: [
    ReactiveFormsModule
  ],
  providers: [EditUserGroup, EditUserFacade],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit, OnDestroy { 
  form: FormGroup;
  user: any;
  _unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private _group: EditUserGroup,
    private _facade: EditUserFacade,
    private _router: Router
  ) {
    this.form = this._group.form;
  }
  
  ngOnInit(): void { 
    this.route.params.subscribe({
      next: (value) => {
        this.user = value;
        this._group.setFormValue(value);
      }
    });

  }

  saveUser(): void {
    const { age } = this.form.value;

    const saveObj = {
      ...this.form.value,
      age: +age
    }
    
    this._facade.updateUser(saveObj);
  }
  
  ngOnDestroy(): void {

  }
}
