import { ADD_CONTACT, FILTER_CONTACTS } from './contacts-types';

// contacts це обєкт з ContactForm який відправляєм через dispatch (useDispatch)
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

// searchValue символи які вели для пошуку контакта в ContactsList
export const filterContacts = (searchValue) => ({
  type: FILTER_CONTACTS,
  payload: searchValue,
});

