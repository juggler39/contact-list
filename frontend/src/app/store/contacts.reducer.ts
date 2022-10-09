import { Contact } from '@models/contact.model';
import { createReducer, on } from '@ngrx/store';
import { loadContactsSuccess } from './contacts.actions';

export const initialState: readonly Contact[] = [];

export const contactsReducer = createReducer(
  initialState,
  on(loadContactsSuccess, (state, { contacts }) =>  contacts),
);
