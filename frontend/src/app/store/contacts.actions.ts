import { Contact } from '@models/contact.model';
import { createAction, props } from '@ngrx/store';


export const loadContacts = createAction('[Contact List] Load Contacts');
export const loadContactsSuccess = createAction('[Contact List] Load Contacts Success', props<{contacts: ReadonlyArray<Contact> }>());
export const loadContactsError = createAction('[Contact List] Load Contacts Error');

export const addContact = createAction(
  '[Contact List] Add Contact',
  props<{ contact: Partial<Contact> }>()
);
export const addContactSuccess = createAction('[Contact List] Add ContactSuccess');

export const removeContact = createAction(
  '[Contact Collection] Remove Contact',
  props<{ contactId: string }>()
);
