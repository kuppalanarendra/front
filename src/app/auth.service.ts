import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  public username:string="";
  public password:string="";

  constructor(private http:HttpClient){}

  login(username:string,password:string){
      return this.http.post(`${this.baseUrl}/authenticate`, { username, password });

  }
  register(username: string, password: string): Observable<any> {
      return this.http.post(`${this.baseUrl}/register`, { username, password });
    }

    // saveToken(token: string) {
    //   localStorage.setItem('jwtToken', token);
    // }
  
    

}