import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CollectionComponent } from '@components/collection/collection.component';
import { ListComponent } from '@components/list/list.component';
import { Contact } from '@models/contact.model';
import { Store } from '@ngrx/store';
import { ContactsService } from '@services/contacts.service';
import { addContact, loadContacts, deleteContact, updateContact } from '@store/contacts.actions';
import { selectContactList } from '@store/contacts.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [ListComponent, CollectionComponent, CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contact[]> = this.store.select(state => state.contacts);
  contactList$ = this.store.select(selectContactList);

  constructor(private store: Store<{ contacts: Contact[] }>, private contactsService: ContactsService) { }

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
  }

  editContact() {
    this.store.dispatch(updateContact({
      contact: {
        id: "2",
        name: "Updated"
      }
    }));
  }

  onRemove(contactId: string) {
    this.store.dispatch(deleteContact({ contactId }));
  }
}
