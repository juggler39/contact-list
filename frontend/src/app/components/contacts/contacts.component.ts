import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact } from '@models/contact.model';
import { Store } from '@ngrx/store';
import { addContact, loadContacts, deleteContact, updateContact } from '@store/contacts.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contact[]> = this.store.select(state => state.contacts);
  animal: string;
  name: string;

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  constructor(private store: Store<{ contacts: Contact[] }>) { }

  ngOnInit() {
    this.store.dispatch(loadContacts());
  }
  addContact() {
    this.store.dispatch(addContact({
      contact: {
        name: "Test",
        email: "test@example.com",
        phone: 123123123
      }
    }));
    this.store.dispatch(loadContacts());
  }

  onEdit(contactId: string) {
    this.store.dispatch(updateContact({
      contact: {
        id: contactId,
        name: "Updated"
      }
    }));
    this.store.dispatch(loadContacts());
  }

  onRemove(contactId: string) {
    this.store.dispatch(deleteContact({ contactId }));
    this.store.dispatch(loadContacts());
  }

}
