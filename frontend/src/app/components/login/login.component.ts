import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { StorageService } from '@services/storage.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '@store/counter.actions';
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
  imports: [CommonModule, RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private store: Store<{ auth: { isLoggedIn: boolean } }>
  ) { }

  ngOnInit(): void {

  }



  login() {

    this.store.dispatch(login({ username: 'john', password: '123456' }));
    // this.authService.login('john', '123456').subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data);
    //     this.router.navigate(['/login']);
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }


  isLoggedIn(): void {
    console.log(this.storageService.isLoggedIn());
  }

  logOut(): void {
    console.log('logout');
    this.store.dispatch(logout());
  }

  public onSubmit(): void {
    this.loginValid = true;
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
