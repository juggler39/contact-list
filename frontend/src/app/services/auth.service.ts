import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  doLogin(): any {
    throw new Error('Method not implemented.');
  }
  checkAuth() {
    throw new Error('Method not implemented.');
  }
  userData: any;
  signOut(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient, private constants: AppConstants) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.constants.AUTH_API + 'auth/login',
      { username, password, },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.constants.AUTH_API + 'logout', {}, httpOptions);
  }

}
