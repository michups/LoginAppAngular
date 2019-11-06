import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  dataOne: any;
  dataTwo: any;
}

interface isLoggedIn {
  status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('http://localhost:8080/data')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost:8080/isloggedin')
  }
}
