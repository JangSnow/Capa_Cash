import { Component, OnInit } from '@angular/core';
import {IonItem, IonInput} from '@ionic/angular/standalone';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonItem, IonInput]
})
export class LoginComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  LogInFunc(){
    console.log("User has logged in!");
    this.router.navigate(['./employee-dashboard']);
  }

  forgetPW(){
    console.log("User forgot their password.");
    this.router.navigate(['./forget-password'])
  }

}
