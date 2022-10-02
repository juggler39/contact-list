import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '@models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactTableComponent {
  animal: string;
  name: string;
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  @Input() contacts$: Observable<Contact[]>;

  @Output() onEdit = new EventEmitter<string>();

}
