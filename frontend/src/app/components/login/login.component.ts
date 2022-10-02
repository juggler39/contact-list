import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, logout } from '@store/auth.actions';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private store: Store<{ auth: { isLoggedIn: boolean } }>) { }

  public onSubmit(): void {
    this.loginValid = true;
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
