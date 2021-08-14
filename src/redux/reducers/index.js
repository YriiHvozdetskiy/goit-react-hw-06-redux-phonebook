import { ADD_CONTACT, FILTER_CONTACTS } from '../actions/contacts-types';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsReducer = (state = initialState, actions) => { // actions { id, name, number }
  switch (actions.type) {
    case ADD_CONTACT: // перевіряєм type який в actions.type -- type: ADD_CONTACT,'ADD_CONTACT'
      return {
        contacts: {
          ...state.contacts, // розпиляєм попередні дані з обєкта contacts щоб не мутувати state
          items: [actions.payload, ...state.contacts.items],// так новий контакт буде дод на верх списку
        },
      };
    case FILTER_CONTACTS: // перевіряєм type який в actions.type -- type: FILTER_CONTACTS,'FILTER_CONTACTS'
      return {
        contacts: {
          ...state.contacts, // розпиляєм попередні дані з обєкта contacts щоб не мутувати state
          filter: actions.payload, // літери за якими шукаєм контакти в ContactsList
        },
      };
    default:
      return state;
  }
};

