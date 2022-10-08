import { Contact } from '@models/contact.model';
import { createAction, props } from '@ngrx/store';


export const addContact = createAction('[Contact List] Add Contact', props<{ contact: Partial<Contact> }>());
export const addContactSuccess = createAction('[Contact List] Add Contact Success');
export const addContactError = createAction('[Contact List] Add Contact Error', props<{ message: string }>());

export const loadContacts = createAction('[Contact List] Load Contacts');
export const loadContactsSuccess = createAction('[Contact List] Load Contacts Success', props<{ contacts: ReadonlyArray<Contact> }>());
export const loadContactsError = createAction('[Contact List] Load Contacts Error', props<{ message: string }>());

export const updateContact = createAction('[Contact List] Update Contact', props<{ contact: Partial<Contact> }>());
export const updateContactSuccess = createAction('[Contact List] Update Contact Success');
export const updateContactError = createAction('[Contact List] Update Contact Error', props<{ message: string }>());

export const deleteContact = createAction('[Contact List] Delete Contact', props<{ contactId: string }>());
export const deleteContactSuccess = createAction('[Contact List] Delete Contact Success');
export const deleteContactError = createAction('[Contact List] Delete Contact Error', props<{ message: string }>());
