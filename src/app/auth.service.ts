import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
interface response {
  response: any;
  secret: any;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {


private loggedInStatus = false //JSON.parse(localStorage.getItem('loggedIn') || 'false')
constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
    // localStorage.setItem('loggedIn','true')
  }
  
  get isLoggedIn() {
    // return this.loggedInStatus
    return   this.loggedInStatus
  }

getUserDetails(username, password) {
  // post these details to API server
  // return user info if correct
  return this.http.post<response>('http://localhost:8080/auth', {
    username,
    password
  })
  // .subscribe(data => {
  //   console.log(data, " is what we got from the server")
  // })
}

}
