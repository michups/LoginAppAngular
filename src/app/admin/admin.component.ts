import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message = "Loading..."

  constructor(private user: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user.getSomeSecretData().subscribe( data => {
      this.message = data.message
      
      // if(data.status==='succes') {
      //   // localStorage.removeItem('loggedIn')
      // } else {
      //   this.r
      // }
    })
  }

}
