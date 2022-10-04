import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '@store/auth.actions';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public loginInalid = false;
  public username = '';
  public password = '';

  constructor(private store: Store<{ auth: { isLoggedIn: boolean } }>) { }

  public onSubmit(): void {
    this.store.dispatch(login({ username: this.username, password: this.password }));
    this.loginInalid = true;
  }
}
