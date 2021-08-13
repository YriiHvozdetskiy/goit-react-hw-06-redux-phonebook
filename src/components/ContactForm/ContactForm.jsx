import { useState } from 'react';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';

import s from './ContactForm.module.scss';

export const  ContactForm =({coincidence= true ,onSubmit})=>{
  const [name,setName]= useState('')
  const [number,setNumber]= useState('')

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;

        case 'number':
        setNumber(value)
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (coincidence(name.toLowerCase())) return;
    
    onSubmit(name, number);

    setName('')
    setNumber('')
  };

    return (
      <>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <>
            <label className={s.label} htmlFor={nameInputId}>
              Name
            </label>
            <DebounceInput
              className={s.input}
              name="name"
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
              type="tel"
              name="number"
              id={phoneInputId}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
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

            <button className={s.button} type="submit">
              Add contact
            </button>
          </>
        </form>
      </>
    );
}

