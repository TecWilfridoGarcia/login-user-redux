import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:IUser
  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

}
