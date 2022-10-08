import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '@services/contacts.service';
import { MessageService } from '@services/message.service';
import { map, catchError, of, switchMap } from 'rxjs';
import { Contact } from '@models/contact.model';
import {
  loadContacts,
  loadContactsError,
  loadContactsSuccess,
  addContact,
  addContactSuccess,
  addContactError,
  deleteContact,
  deleteContactSuccess,
  deleteContactError,
  updateContact,
  updateContactError,
  updateContactSuccess
} from './contacts.actions';


@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private contactsService: ContactsService,
    private messageService: MessageService,
  ) { }


  addContact$ = createEffect(() => this.actions$.pipe(
    ofType(addContact),
    switchMap((event: { contact: Partial<Contact> }) => this.contactsService.addContact(event.contact)
      .pipe(
        map(() => addContactSuccess()),
        catchError((error: HttpErrorResponse) => of(addContactError({ message: error.message })))
      ))
  ));

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(loadContacts),
    switchMap(() => this.contactsService.loadContacts()
      .pipe(
        map((contacts: Contact[]) => loadContactsSuccess({ contacts })),
        catchError((error: HttpErrorResponse) => of(loadContactsError({ message: error.message })))
      ))
  ));

  updateContact$ = createEffect(() => this.actions$.pipe(
    ofType(updateContact),
    switchMap((event: { contact: Partial<Contact> }) => this.contactsService.updateContact(event.contact)
      .pipe(
        map(() => updateContactSuccess()),
        catchError((error: HttpErrorResponse) => of(addContactError({ message: error.message })))
      ))
  ));

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContact),
      switchMap((contact: { contactId: string }) => this.contactsService.deleteContact(contact.contactId)
        .pipe(
          map(() => deleteContactSuccess()),
          catchError((error: HttpErrorResponse) => of(deleteContactError({ message: error.message })))
        ))
    )
  );

  contactSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addContactSuccess, deleteContactSuccess, updateContactSuccess),
    map(() => loadContacts())
  ));

  contactsError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addContactError, loadContactsError, updateContactError, deleteContactError),
      map((error) => {
        this.messageService.show(error.message)
      })),
    { dispatch: false }
  );
}
