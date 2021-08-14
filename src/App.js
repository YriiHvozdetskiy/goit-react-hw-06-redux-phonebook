import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import Title from './components/Title/Title';
import ContactList from 'components/ContactList/ContactList';
import { ContactForm } from './components/ContactForm/ContactForm';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
  });

  const { items } = useSelector((state) => (state.contacts.contacts));
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      {/*рендерем Filter тільки тоді коли щось є в state із reducer*/}
      {items.length !== 0 && <Filter />}
      <ContactList />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: 'red',
              color: '#fff',
            },
          },
        }}
      />
    </>
  );
}

