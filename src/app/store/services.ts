import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  private URL = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) { }


  getAllUsers(): Observable<any> {
    return this._http.get(this.URL);
  }

  deleteUser$(id: any): Observable<any> {
    return this._http.delete(`${this.URL}/${id}`);
  }

  updateUser(value: any): Observable<any> {
    return this._http.put(`${this.URL}/${value.id}`, value);
  }

  createUser(value: any): Observable<any> {
    return this._http.post(`${this.URL}`, value)
  }
}
