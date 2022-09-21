import { NgModule } from '@angular/core';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@components/contacts/contacts.component').then(c => c.ContactsComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('@components/login/login.component').then(c => c.LoginComponent)
  },
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
