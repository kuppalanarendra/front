import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  username:string="";
  password:string="";
  errorMessage:string="Invalid Credentials";
  successMessage:string="";
  invalidLogin=false;
  loginSuccess=false;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    
  }

  handleLogin(){
    console.log("clicked")
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // this.authService.saveToken(response.token);
        console.log('Login successful');
      },
      (error: any) => {
        console.error('Login failed', error);
      }
    );
  }
}
