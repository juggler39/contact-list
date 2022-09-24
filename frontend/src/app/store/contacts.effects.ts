import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '@services/contacts.service';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { loadContacts, loadContactsError, loadContactsSuccess, addContact, addContactSuccess } from './contacts.actions';


@Injectable()
export class ContactEffects {

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) { }

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(loadContacts),
    mergeMap(() => this.contactsService.loadContacts()
      .pipe(
        map(contacts => loadContactsSuccess({ contacts })),
        catchError(() => of(loadContactsError()))
      ))
  ));

    addContact$ = createEffect(() => this.actions$.pipe(
      ofType(addContact),
      mergeMap((x) => this.contactsService.addContact(x.contact)
      .pipe(
        map(() => addContactSuccess()),
        catchError(() => of(loadContactsError()))
      ))
    ));
}
