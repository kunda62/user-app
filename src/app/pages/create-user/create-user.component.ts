import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateUserGroup } from './create-user.group';
import { CreateUserFacade } from './create-user.facade';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule],
  providers:[ CreateUserGroup, CreateUserFacade ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserComponent {
  form: FormGroup

  constructor(private _group: CreateUserGroup, private _facade: CreateUserFacade) {
    this.form = this._group.form;
  }

  saveUser(): void {
    this._facade.createUser(this.form.value)
  }
 }
