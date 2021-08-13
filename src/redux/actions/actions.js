import { ADD_CONTACT } from './contacts-types';

export const addContacts = (name) => ({
    type: ADD_CONTACT,
    payload: name,
  }
);

