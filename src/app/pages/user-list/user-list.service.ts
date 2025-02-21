import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddApointmentService {

  constructor(private _http: HttpClient) { }


  getAllUsers(): Observable<any> {
    const url = 'http://localhost:3000/users';

    return this._http.get(url);
  }

  deleteUser$(id: any): Observable<any> {
    console.log('service delete: ',typeof id);
    
    return this._http.delete(`http://localhost:3000/users/${id}`);
  }

}
