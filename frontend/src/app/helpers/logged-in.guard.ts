import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '@services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) { };

  canActivate(): boolean {
    const isLoggedIn = this.storageService.isLoggedIn();
    return !isLoggedIn;
  }
}
