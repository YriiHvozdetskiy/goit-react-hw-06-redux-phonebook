import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';
import { addContact } from '../../redux/actions/actions';
import toast from 'react-hot-toast';
import s from './ContactForm.module.scss';

export const ContactForm = ({ coincidence = true }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (coincidence(name.toLowerCase())) return;

    // створюєм обєкт з даних які прийшли з форми + дод id
    const contact = { id: nanoid(), name, number };
    // відправляєм створений контакт через actions методом dispatch в reducer
    dispatch(addContact(contact));

    toast.success(`${name} added a contact`);

    // обнуляєм поля input після создання контакта
    setName('');
    setNumber('');
  };

  return (
    <>
      <form
        className={s.form}
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <>
          <label className={s.label} htmlFor={nameInputId}>
            Name
          </label>
          <DebounceInput
            className={s.input}
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={nameInputId}
            value={name}
            debounceTimeout={300}
            onChange={handleChange}
          />

          {/* <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={nameInputId}
              onChange={handleName}
              value={name}
            /> */}

          <label className={s.label} htmlFor={phoneInputId}>
            Number
          </label>
          <DebounceInput
            className={s.input}
            type='tel'
            name='number'
            id={phoneInputId}
            value={number}
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
            required
            debounceTimeout={300}
            onChange={handleChange}
          />
          {/* <input
              className={s.input}
              type="tel"
              name="number"
              id={phoneInputId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleNumber}
              value={state.number}
            /> */}

          <button className={s.button} type='submit'>
            Add contact
          </button>
        </>
      </form>
    </>
  );
};

