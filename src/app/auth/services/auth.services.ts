import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of, tap } from 'rxjs';
import { LoginResponse } from '../interfaces/login.interface';
import { Session } from '../interfaces/session.interface';
import { CheckTokenResponse } from '../interfaces/check-token.response';
import { SessionStatus } from '../interfaces/status.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;
  private session?: Session;
  private authenticated?: boolean;
  private validToken?: boolean;
  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<Boolean> {
    const url = `${this.baseUrl}/login`;
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body)
      .pipe(
        tap(({ id, token }) => {

          this.user?.id;
          localStorage.setItem('token', token);
          localStorage.setItem('userId',id.toString());
          console.log({ id, token });
          this.authenticated = true
        }),
        map(() => true),
        catchError(() => of(false))
      );
  }


  isAuthenticated() {
    return this.authenticated;
  }

  logout() {
    console.log("logging out");
    this.user = undefined;
    this.authenticated = false;
    localStorage.clear();
  }

  validateToken(token: string): Observable<boolean>{
    const url = `${this.baseUrl}/authorization`;
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<boolean>(url, {headers}).pipe(map(() => true),
    catchError(() => of(false)));
  }








}
