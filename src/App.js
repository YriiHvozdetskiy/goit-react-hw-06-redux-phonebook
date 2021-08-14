import toast, { Toaster } from 'react-hot-toast';
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

  const deleteContact = e => {
    const id = e.currentTarget.id;
    setContacts(contacts.filter(n => n.id !== id));
    toast.success(`deleted contact`);
  };

  const handleCoincidence = currentName => {
    if (!contacts) return;

    if (contacts.find(({ name }) => name.toLowerCase() === currentName)) {
      toast.error(`${currentName} is already in contacts`);
      return true;
    }
  };
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm
        coincidence={handleCoincidence}
      />
      <Title>Contacts</Title>
      {/*рендерем Filter тільки тоді коли щось є в state із reducer*/}
      {items.length !== 0 && <Filter />}
      <ContactList
        deleteContact={deleteContact}
      />
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

