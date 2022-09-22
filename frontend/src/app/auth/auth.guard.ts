import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from '@services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) { };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.storageService.isLoggedIn();
    if (isLoggedIn) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }

}
