import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '@store/auth.actions';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public loginError$: Observable<boolean>;;
  public username = '';
  public password = '';

  constructor(private store: Store<{ auth: { loginError: boolean } }>) { }

  public onSubmit(): void {
    this.store.dispatch(login({ username: this.username, password: this.password }));
    this.loginError$ = this.store.select('auth').pipe(
      map((state) => state.loginError),
    );
  }
}
