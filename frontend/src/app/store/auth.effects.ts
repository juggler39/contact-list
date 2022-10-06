import { Injectable } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { checkAuth, login, loginComplete, loginError, logout, logoutComplete } from './auth.actions';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StorageService } from '@services/storage.service';

interface UserData {
  jwtToken: string;
  userId: number;
}

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap((user) => this.authService.login(user.username, user.password).pipe(
      map((userData: UserData) => {
        this.storageService.saveUser(userData);
        return loginComplete()
      }),
      catchError(() => of(loginError()))
    ))
  ));

  loginComplete$ = createEffect(() => this.actions$.pipe(
    ofType(loginComplete),
    tap(() => {
      this.router.navigate(['']);
    }),),
    { dispatch: false }
  );

  checkAuth$ = createEffect(() => this.actions$.pipe(
    ofType(checkAuth),
    map(() => {
      const loggedIn = this.storageService.isLoggedIn();
      if (loggedIn) {
        return loginComplete()
      } else return logoutComplete()
    })
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => {
      this.storageService.clear();
      this.router.navigate(['/login']);
    })),
    { dispatch: false }
  );
}
