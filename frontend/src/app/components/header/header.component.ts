import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkAuth, logout } from '@store/auth.actions';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  title = 'Contact list';
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<{ auth: { isLoggedIn: boolean } }>) {
    this.isLoggedIn$ = this.store.select('auth').pipe(
      map((state) => state.isLoggedIn),
    );
  }

  ngOnInit() {
    this.store.dispatch(checkAuth());
  }

  logout() {
    this.store.dispatch(logout());
  }

}
