import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { StorageService } from '@services/storage.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '@store/counter.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  count$: Observable<number>

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {

  }

  logIn() {
    this.authService.login('john', '123456').subscribe({
      next: data => {
        this.storageService.saveUser(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  isLoggedIn(): void {
    console.log(this.storageService.isLoggedIn());
  }

  logOut(): void {
    this.storageService.clean();
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
