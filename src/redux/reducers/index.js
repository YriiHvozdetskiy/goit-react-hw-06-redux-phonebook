import { ADD_CONTACT } from '../actions/contacts-types';


const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_CONTACT:
      return {...state ,contacts: {
        ...state.contacts,
          items: [...state.contacts.items, actions.payload]
        }}
    default:
      return state;
  }
};