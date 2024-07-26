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
    console.log("Auth called")
     return  this.http.post<string>(`${this.baseUrl}/authenticate`, { username, password },{ responseType: 'text' as 'json' });

  }
  register(username: string, password: string): Observable<any> {
    console.log(username)
      return this.http.post(`${this.baseUrl}/register`, { username, password });
    }

    saveToken(token: string) {
      console.log("save called");
      localStorage.setItem('jwtToken', token);
    }
    getToken(): string | null {
      return localStorage.getItem('jwtToken');
    }
  
    

}