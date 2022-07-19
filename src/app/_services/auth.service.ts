
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from './token-storage.service';
import { environment } from 'src/environments/environment';

// const AUTH_API = 'http://localhost:3000/api/auth/';
// const AUTH_API = 'http://146.190.193.83:3000/api/auth/';
const AUTH_API = environment.API_URL+ '/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,public jwtHelper: JwtHelperService, private tokenStorage: TokenStorageService) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }
  logout(){
    this.tokenStorage.signOut();
  }
  invite(email: string): Observable<any> {
    return this.http.post(AUTH_API + 'invite', {
      email
    }, httpOptions);
  }
  validateInviteToken(token: string): Observable<any> {
    return this.http.post(AUTH_API + 'validateInviteToken', {
      token
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  updateDetails(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'update-password', {
      username,
      email,
      password
    }, httpOptions);
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('auth-token') || undefined;
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}