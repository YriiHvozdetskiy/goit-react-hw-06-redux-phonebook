import { ADD_CONTACT } from './contacts-types';

// contacts обєкт з форми який відправляєм з App методу getContact через dispatch (useDispatch)
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

