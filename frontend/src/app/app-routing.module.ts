import { NgModule } from '@angular/core';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { AuthGuard } from '@helpers/auth.guard';

const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./modules/contact-list/contact-list.module').then(m => m.ContactListModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'enabled',
    })
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
