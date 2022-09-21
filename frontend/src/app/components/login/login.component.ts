import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {

  }

  logIn() {
    this.authService.login('9230001122', '123456').subscribe({
      next: data => {
        this.storageService.saveUser(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  isLoggedIn():void {
    console.log(this.storageService.isLoggedIn());
  }

  logOut():void {
    this.storageService.clean();
  }

}
