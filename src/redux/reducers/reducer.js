import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      addContact: (state, actions) => state.contacts.items.push(actions.payload),
      filterContacts: ({ contacts }, actions) => contacts.filter = actions.payload,
      deleteContact: ({ contacts }, actions) => [...contacts.items, ...actions.payload],
    },
  })
;

export const { addContact, filterContacts, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } from '../actions/contacts-types';
//
// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };
//
// export const contactsReducer = (state = initialState, actions) => { // actions { id, name, number }
//   switch (actions.type) {
//     case ADD_CONTACT: // перевіряєм type який в actions.type -- type: ADD_CONTACT,'ADD_CONTACT'
//       return {
//         contacts: {
//           ...state.contacts, // розпиляєм попередні дані з обєкта contacts щоб не мутувати state
//           items: [actions.payload, ...state.contacts.items],// так новий контакт буде дод на верх списку
//         },
//       };
//     case FILTER_CONTACTS: // перевіряєм type який в actions.type -- type: FILTER_CONTACTS,'FILTER_CONTACTS'
//       return {
//         contacts: {
//           ...state.contacts, // розпиляєм попередні дані з обєкта contacts щоб не мутувати state
//           filter: actions.payload, // літери за якими шукаєм контакти в ContactsList
//         },
//       };
//     case DELETE_CONTACT: // перевіряєм type який в actions.type -- type: DELETE_CONTACT,'DELETE_CONTACT'
//       return {
//         contacts: {
//           ...state.contacts, // розпиляєм попередні дані з обєкта contacts щоб не мутувати state
//           items: [...actions.payload],// розпиляєм новий відфільтрований масив БЕЗ контакта який видалили
//         },
//       };
//     default:
//       return state;
//   }
// };
//
