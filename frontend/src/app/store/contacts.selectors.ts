import { Contact } from '@models/contact.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectContacts = createFeatureSelector<ReadonlyArray<Contact>>('contacts');

export const selectListState = createFeatureSelector<
  ReadonlyArray<string>
>('list');

export const selectContactList = createSelector(
  selectContacts,
  selectListState,
  (contacts, list) => {
    return list.map((id) => contacts.find((contact) => contact.id === id));
  }
);
