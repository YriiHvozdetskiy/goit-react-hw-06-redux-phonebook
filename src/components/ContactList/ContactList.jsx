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

  // items це вже відфільтрований масив з reducera
  // items рендере список контактів які ми додали і коли в Filter робем пошук показує результати (відфільтрований масив з результатами пошуку)
  const items = useSelector((state) => {
    const { items, filter } = state.contacts.contacts; // деструк з raducera поля обєкта

    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter)); // повертаєм відфільтрований масив з результатами пошуку
  });

  return (
    // рендерем контакти з масиву items || рендерем результати пошуку
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
