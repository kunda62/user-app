import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class CreateUserGroup {
  form: FormGroup

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      eyeColor: [null, Validators.required]
    })
  }
}