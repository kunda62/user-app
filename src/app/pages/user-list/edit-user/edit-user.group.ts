import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class EditUserGroup {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      id:[null],
      name: [null, Validators.required],
      eyeColor: [null, Validators.required],
      age: [null, Validators.required]
    })
  }

  /**
   * Set form values
   * @param values 
   */
  setFormValue(values: any): void {
    this.form.patchValue(values);
  }
}
