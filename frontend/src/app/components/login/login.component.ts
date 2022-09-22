import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { StorageService } from '@services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, RouterModule],
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

  test() {
    this.authService.test().subscribe(x => console.log(x));

  }
}
