import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

/**
 * Represents the structure of login form data.
 */
export interface LoginForm {
  email: string;
  password: string;
}

/**
 * Represents the structure of user data.
 */
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  phone?: string;
}

/**
 * Represents the structure of the JWT token.
 */
export interface Token {
  access_token: string;
}

/**
 * Name of the local storage key for the JWT token.
 */
export const JWT_NAME = 'user-jwt-token';

/**
 * Authentication service for handling user authentication.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {}

  /**
   * Logs in the user with the provided credentials.
   * @param loginForm - The user's login credentials.
   * @returns An Observable of the JWT token.
   */
  login(loginForm: LoginForm): Observable<Token> {
    return this.http
      .post<Token>('api/auth/login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          // console.log('token', token);
          localStorage.setItem(JWT_NAME, token.access_token);

          this.getUserId().subscribe((id) => {
            this.setUserIdToStorage(id);
          });

          return token;
        }),
        catchError((error) => {
          console.error('connection error', error);
          throw error;
        })
      );
  }

  /**
   * Registers a new user.
   * @param user - The user to be registered.
   * @returns An Observable with the registration response.
   */
  register(user: User): Observable<any> {
    // console.log('user', user);
    return this.http.post<any>('api/user/', user);
  }

  /**
   * Registers and logs in a user.
   * @param userCredentials - The user credentials for registration and login.
   * @returns An Observable of the user's JWT token.
   */
  registerAndLogin(userCredentials: any) {
    return this.register(userCredentials).pipe(
      switchMap((user) => this.login(user)),
      switchMap(() => this.getUserId())
    );
  }

  /**
   * Checks if the user is authenticated.
   * @returns True if the user is authenticated, false otherwise.
   */
  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_NAME);
    console.log('token', token, this.jwtHelperService.isTokenExpired(token));

    // чи не застарілий токен
    return !this.jwtHelperService.isTokenExpired(token);
  }

  //  isCorrectId():boolean {
  //   this.getUserId().subscribe((jwtId) => {
  //     console.log('jwtId, Id', jwtId ,this.getUserIdFromStorage());

  //     if(jwtId && this.getUserIdFromStorage()) {
  //       return jwtId === this.getUserIdFromStorage();
  //     }
  //     return false;
  //   });

  //   return false;
  // }

  /**
   * Gets the user ID from the decoded JWT token.
   * @returns An Observable of the user ID or null if not available.
   */
  getUserId(): Observable<string> {
    // console.log('getUserId');
    return of(localStorage.getItem(JWT_NAME)).pipe(
      switchMap((jwt: string | null) => {
        if (jwt) {
          // If jwt is not null, decode the token and extract the user id
          const decodedToken = this.jwtHelperService.decodeToken(jwt);
          // console.log('decodedToken', decodedToken);
          return of(decodedToken ? decodedToken.user.id : null);
        } else {
          // If jwt is null, return null
          console.log('token is null');
          return of(null);
        }
      })
    );
  }

  setUserIdToStorage(id: string) {
    localStorage.setItem('user_id', id);
  }

  getUserIdFromStorage() {
    return localStorage.getItem('user_id');
  }

  // get email for a test -- need get an user name
  getUserName(): Observable<string> {
    // console.log('getUserId');
    return of(localStorage.getItem(JWT_NAME)).pipe(
      switchMap((jwt: string | null) => {
        if (jwt) {
          // If jwt is not null, decode the token and extract the user id
          const decodedToken = this.jwtHelperService.decodeToken(jwt);
          // console.log('decodedToken', decodedToken);
          return of(decodedToken ? decodedToken.user.email : null);
        } else {
          // If jwt is null, return null
          console.log('token is null');
          return of(null);
        }
      })
    );
  }

  getIdFromJWT() {
    const jwt = localStorage.getItem(JWT_NAME);

    if (jwt) {
      const decodedToken = this.jwtHelperService.decodeToken(jwt);
      return decodedToken.user.id;
    }

    return undefined;
  }

  /**
   * Logs out the user by removing the JWT token from local storage.
   */
  logOut(): void {
    localStorage.removeItem(JWT_NAME);
    localStorage.removeItem('user_id');
  }
}
