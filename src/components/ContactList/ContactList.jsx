import { useSelector } from 'react-redux';
import s from '././ContactList.module.scss';

function ContactList({ deleteContact }) {
  const {items} = useSelector((state) => ( state.contacts.contacts ))

  return (
    <ul className={s.list}>
      {items && items.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <span>{name}</span>: <span>{number}</span>
            <button
              className={s.button}
              type="button"
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
