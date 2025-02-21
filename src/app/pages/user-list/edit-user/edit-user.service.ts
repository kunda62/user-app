import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EditUserService {
  URL = 'http://localhost:3000/users';
  constructor(private _http: HttpClient) { }

  updateUser(value: any): Observable<any> {
    return this._http.put(`${this.URL}/${value.id}`, value);
  }

}
