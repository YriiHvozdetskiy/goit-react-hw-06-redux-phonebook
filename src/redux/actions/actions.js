import { ADD_CONTACT } from './contacts-types';

// contacts це обєкт з форми який відправляєм з App методом getContact через dispatch (useDispatch)
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

