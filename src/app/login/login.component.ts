import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule,RegistrationComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit{


  username:string="";
  password:string="";
  errorMessage:string="Invalid Credentials";
  successMessage:string="";
  invalidLogin=false;
  loginSuccess=false;

  constructor(private authService:AuthService,http:HttpClient){}

  ngOnInit(): void {
    
  }

  handleLogin(){
    console.log("clicked")
    this.authService.login(this.username, this.password).subscribe(
      (token: string) => {
        console.log('Token received:', token);
        this.authService.saveToken(token);  // Save the token to local storage
        alert("Login Successful")
      },
      error => {
        console.error('Login failed', error);
        alert("invalid login credentials")
      }
    );
  }

  }