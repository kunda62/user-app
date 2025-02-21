

import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Injectable()
export class TimeslotsGroup {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      users: this._fb.array([])
    })
  }

  /**
   * Fill jobs ad
   * @param data
   */
  fillUsers(data: any[]): void {
    const array = this.form.get('users') as FormArray;
    
    if (data && data.length) {
      data.forEach((item: any) => {
        array.push(this._fb.group({
          ...item
        }))
      });
    }
  }

  /**
   * Clear form
   * @param type
   */
  clearForm(): void {
    const adList = this.form.get('users') as FormArray;
    adList.clear();
  }
}
