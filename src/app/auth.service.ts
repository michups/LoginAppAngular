import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface response {
  response: any;
  secret: any;
}

interface registerResponse {
  status: boolean;
  message: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


private loggedInStatus = false 
constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }
  
  get isLoggedIn() {
    return   this.loggedInStatus
  }

getUserDetails(username, password) {
  // post these details to API server
  // return user info if correct
  return this.http.post<response>('http://localhost:8080/auth/login', {
    username,
    password
  },{withCredentials: true})
}
  registerUser(username, password) {
    return this.http.post<registerResponse>('http://localhost:8080/auth/register', {
      username,
      password
    },{withCredentials: true})
  }
}
