import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListComponent } from '@components/list/list.component';
import { Contact } from '@models/contact.model';
import { Store } from '@ngrx/store';
import { addContact, loadContacts, deleteContact, updateContact } from '@store/contacts.actions';
import { selectContactList } from '@store/contacts.selectors';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [ListComponent, CommonModule, MatTableModule, MatFormFieldModule, MatPaginatorModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contact[]> = this.store.select(state => state.contacts);
  contactList$ = this.store.select(selectContactList);
  ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

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
