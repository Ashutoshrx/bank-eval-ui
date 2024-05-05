import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url: string = 'http://localhost:8080/technocrat/bank/evaluator';
  constructor(private http: HttpClient) { }

  doLogin(credentials: any) {
    return this.http.post(`${this.url}/auth/login`, credentials,{responseType: 'text'});
  }

  loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }
  isLoggedIn(): boolean {
    var token = localStorage.getItem("token");
    if (token == undefined || token == null || token == '') {
      return false;
    } else {
      return true;
    }
  }
  logoutUser() {
    localStorage.removeItem("token");
    return true;
  }

  getToken() {
    return localStorage.getItem("token");
  }

}
