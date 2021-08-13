import { useSelector } from 'react-redux';
import s from '././ContactList.module.scss';

function ContactList({ deleteContact }) {
  //в useSelector приходе глобальний  state з store(обєкт що повертає функ combineReducers) в якому вибераєм відповідне поле (contacts:contactsReducer),
  // де знаходиться обєкт з reducera:
  // initialState = {
  //   contacts: {
  //     items: [],
  //     filter: '',
  //   },
  // };
  // деструктизіруєм з обєкта contacts масив items, де знаходяться контакти з форми  { id, name, number }
  const { items } = useSelector((state) => (state.contacts.contacts));

  return (
    // рендерем контакти з масиву items
    <ul className={s.list}>
      {items && items.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <span>{name}</span>: <span>{number}</span>
            <button
              className={s.button}
              type='button'
              id={id}
              onClick={deleteContact}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
