import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of, tap } from 'rxjs';
import { LoginResponse } from '../interfaces/login.interface';
import { Session } from '../interfaces/session.interface';
import { CheckTokenResponse } from '../interfaces/check-token.response';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;
  private session?: Session;
  private authenticated?: boolean;
  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<Boolean> {
    const url = `${this.baseUrl}/login/2`;
    const body = { email, password };
    console.log("en el login");
    //return this.http.get<LoginResponse>(url, body)
    return this.http.get<LoginResponse>(url)
      .pipe(
        tap(({ id, token }) => {

          this.user?.id;
          localStorage.setItem('token', token);
          console.log({ id, token })
        }),
        map(() => true)
      );


  }

  logout() {
    this.user = undefined;
    this.authenticated = false;
    localStorage.clear();
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    const token = localStorage.getItem('token');
    return this.http.get<User>(`${this.baseUrl}/users/2`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(err => of(false))
      );
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/authorization`;
    const token = localStorage.getItem('token');
    if (!token) return of(false);
    
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.get<CheckTokenResponse>(url, { headers }).pipe(
      map(({token, user}) => {
        this.user = user;
        this.authenticated = true;
        localStorage.setItem('token',token);
        return true;
       }),
       catchError(() => of(false))
    )
  }


}
