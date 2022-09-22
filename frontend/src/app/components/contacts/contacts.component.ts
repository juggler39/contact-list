import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserContacts().subscribe(x => console.log(x));
  }

}
