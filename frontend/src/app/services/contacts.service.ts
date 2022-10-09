import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '@models/contact.model';

import { Observable } from 'rxjs';
import { AppConstants } from '../app.constants';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private http: HttpClient, private constants: AppConstants) { }

  addContact(contact: Partial<Contact>): Observable<Contact> {
    return this.http.post<Contact>(this.constants.AUTH_API + 'contacts', contact);
  }

  loadContacts(): Observable<Array<Contact>> {
    return this.http.get<Contact[]>(this.constants.AUTH_API + 'contacts', { responseType: 'json' });
  }

  updateContact(contact: Partial<Contact>): Observable<Object> {
    return this.http.patch(this.constants.AUTH_API + 'contacts' + '/' + contact.id, contact);
  }

  deleteContact(contactId: string): Observable<Contact> {
    return this.http.delete<Contact>(this.constants.AUTH_API + 'contacts' + '/' + contactId);
  }
}

