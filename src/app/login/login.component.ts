import { ACTION_LOGIN } from './../store/actions/appActions';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';
import { reducer } from '../store/reducers/appReducer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
    private router: Router,
    private user: UserService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password).subscribe(
      data => {
        if(data.response=="success"){
          this.router.navigate(['admin'])
          this.Auth.setLoggedIn(true)
          this.user.updateState({
            action: ACTION_LOGIN,
            payload: username
          })
        }else {
          window.alert(data.response+", "+data.secret)
        }

      }
    )

    console.log(username, password)
  }
}
