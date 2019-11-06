import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  status: any;
  message: any;
}

interface isLoggedIn {
  status: boolean;
}

interface logoutStatus {
  success: boolean;
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

  logout() {
    return this.http.get<logoutStatus>('http://localhost:8080/logout')
  }

}
