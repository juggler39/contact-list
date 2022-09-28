import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '@services/contacts.service';
import { map, catchError, of, switchMap } from 'rxjs';
import { loadContacts, loadContactsError, loadContactsSuccess, addContact, addContactSuccess, deleteContact, deleteContactSuccess, addContactError, deleteContactError, updateContact, updateContactError, updateContactSuccess } from './contacts.actions';


@Injectable()
export class ContactEffects {

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) { }

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(loadContacts),
    switchMap(() => this.contactsService.loadContacts()
      .pipe(
        map(contacts => loadContactsSuccess({ contacts })),
        catchError(() => of(loadContactsError()))
      ))
  ));

  addContact$ = createEffect(() => this.actions$.pipe(
    ofType(addContact),
    switchMap((x) => this.contactsService.addContact(x.contact)
      .pipe(
        map(() => addContactSuccess()),
        catchError(() => of(addContactError()))
      ))
  ));

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContact),
      switchMap((x) => this.contactsService.deleteContact(x.contactId)
        .pipe(
          map(() => deleteContactSuccess()),
          catchError(() => of(deleteContactError()))
        ))
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContact),
      switchMap((x) => this.contactsService.updateContact(x.contact)
        .pipe(
          map(() => updateContactSuccess()),
          catchError(() => of(updateContactError()))
        ))
    )
  );

}
