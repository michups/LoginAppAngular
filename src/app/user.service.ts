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

interface status {
  status: boolean;
}

interface status {
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

  updateQuote(value) {
    return this.http.post<status>('http://localhost:8080/data/quote',{
      value
    }, {withCredentials: true})
  }

  getSomeSecretData() {
    return this.http.get<myData>('http://localhost:8080/data/datasecret', {withCredentials: true})
  }

  isLoggedIn(): Observable<status> {
    return this.http.get<status>('http://localhost:8080/auth/isloggedin', {withCredentials: true})
  }

  logout() {
    return this.http.get<status>('http://localhost:8080/auth/logout', {withCredentials: true})
  }
}
