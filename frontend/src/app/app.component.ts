import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '@store/auth.actions';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Contact list';
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<{ auth: { isLoggedIn: boolean } }>) {
    this.isLoggedIn$ = this.store.select('auth').pipe(
      map((x) => x.isLoggedIn),
      tap(x => console.log(x))
    );
  }
  ngOnInit() {


  }

  logout() {
    console.log('click');
    this.store.dispatch(logout());
  }

}
