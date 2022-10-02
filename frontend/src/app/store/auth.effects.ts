import { Injectable } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { checkAuth, login, loginComplete, logout } from './auth.actions';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadContactsSuccess, loadContactsError } from './contacts.actions';
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
        console.log('sdf');

        return loginComplete()
      }),
      catchError(() => of(loadContactsError()))
    ))
  ));

  loginComplete$ = createEffect(() => this.actions$.pipe(
    ofType(loginComplete),
    tap(() => {
      console.log('loginComplete');
      this.router.navigate(['']);
    }),),
    { dispatch: false }
  );

  checkAuth$ = createEffect(() => this.actions$.pipe(
    ofType(checkAuth),
    tap(() => {
      console.log('checkAuth');
    }),
    map(loginComplete),
    map(() => this.storageService.isLoggedIn()),
    map((x) => {console.log('map', x);
      if (x) {
        console.log('sdfasdf');

        return loginComplete()
      } else return loginComplete()
    }),

  ),

    { dispatch: false }
  );

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => {
      console.log('logout');

      this.storageService.clear();
      this.router.navigate(['/login']);
    })),
    { dispatch: false }
  );

  // checkauth$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromAuthActions.checkAuth),
  //     switchMap(() =>
  //       this.authService
  //         .checkAuth()
  //         .pipe(
  //           map((isLoggedIn) =>
  //             fromAuthActions.checkAuthComplete({ isLoggedIn })
  //           )
  //         )
  //     )
  //   )
  // );

  // checkAuthComplete$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromAuthActions.checkAuthComplete),
  //     switchMap(({ isLoggedIn }) => {
  //       if (isLoggedIn) {
  //         return this.authService.userData.pipe(
  //           map((profile) =>
  //             fromAuthActions.loginComplete({ profile, isLoggedIn })
  //           )
  //         );
  //       }
  //       return of(fromAuthActions.logoutComplete());
  //     })
  //   )
  // );

  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromAuthActions.logout),
  //     tap(() => this.authService.signOut()),
  //     map(() => fromAuthActions.logoutComplete())
  //   )
  // );

  // logoutComplete$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromAuthActions.logoutComplete),
  //       tap(() => {
  //         this.router.navigate(['/']);
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
