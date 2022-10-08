import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '@components/contact-dialog/contact-dialog.component';
import { Contact } from '@models/contact.model';
import { Store } from '@ngrx/store';
import { addContact, loadContacts, updateContact } from '@store/contacts.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contact[]> = this.store.select(state => state.contacts);
  constructor(private store: Store<{ contacts: Contact[] }>, public dialog: MatDialog) { }

  ngOnInit() {
    this.store.dispatch(loadContacts());
  }

  addContact() {
    const dialogRef = this.dialog.open(ContactDialogComponent,
      {
        data: {
          title: 'Add a new contact',
        },
        width: '480px',
      });
    dialogRef.afterClosed().subscribe((contact: Contact) => {
      if (contact) {
        this.store.dispatch(addContact({ contact: contact }));
      }
    });
  }

  onEdit(contact: Contact) {
    const contactId = contact.id;
    const dialogRef = this.dialog.open(ContactDialogComponent,
      {
        data: {
          title: 'Edit contact',
          contact: contact
        },
        width: '480px',
      });

    dialogRef.afterClosed().subscribe((contact: Contact) => {
      if (contact) {
        this.store.dispatch(updateContact({ contact: { ...contact, id: contactId } }));
        this.store.dispatch(loadContacts());
      }
    });
  }

}
