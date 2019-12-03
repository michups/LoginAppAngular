import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface userData {
  username: any;
  status: any;
  quote: any;
}

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

  getData() {
    return this.http.get<userData>('http://localhost:8080/data/user', {withCredentials: true})
  }

  getSomeSecretData() {
    return this.http.get<myData>('http://localhost:8080/data/datasecret', {withCredentials: true})
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost:8080/auth/isloggedin', {withCredentials: true})
  }

  logout() {
    return this.http.get<logoutStatus>('http://localhost:8080/auth/logout', {withCredentials: true})
  }

}
