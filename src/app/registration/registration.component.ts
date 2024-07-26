import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[AuthService]
})
export class RegistrationComponent {
 
  username:string="";
  password:string="";

  constructor(private authService:AuthService,http:HttpClient){

  }
  register() {
    this.authService.register(this.username, this.password).subscribe(response => {
      alert('User registered successfully');
    }, error => {
      alert('Registration failed');
    });
  }
}
