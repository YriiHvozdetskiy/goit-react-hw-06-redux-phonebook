import { ADD_CONTACT } from '../actions/contacts-types';


const initialState = '';

export const contactsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_CONTACT:
      return [...state,actions.payload]
    default:
      return state;
  }
}