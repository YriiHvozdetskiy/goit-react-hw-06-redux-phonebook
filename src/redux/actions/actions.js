import { ADD_CONTACT } from './contacts-types';

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

