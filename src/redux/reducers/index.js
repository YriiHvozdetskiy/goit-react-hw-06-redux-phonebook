import { ADD_CONTACT } from '../actions/contacts-types';

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
          items: [actions.payload,...state.contacts.items],
        },
      };
    default:
      return state;
  }
};

