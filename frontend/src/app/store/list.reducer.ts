import { Contact } from '@models/contact.model';
import { createReducer, on } from '@ngrx/store';
import { addContact, removeContact } from './contacts.actions';


export const initialState: ReadonlyArray<Partial<Contact>> = [];

export const listReducer = createReducer(
  initialState,
  on(addContact, (state, { contact }) =>  [...state, contact] ),
);
