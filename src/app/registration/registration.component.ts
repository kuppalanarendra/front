import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username:string="";
  password:string="";

  constructor(private authService:AuthService){

  }
  register() {
    this.authService.register(this.username, this.password).subscribe(response => {
      alert('User registered successfully');
    }, error => {
      alert('Registration failed');
    });
  }
}
