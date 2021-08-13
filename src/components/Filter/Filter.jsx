import { nanoid } from 'nanoid';

import s from './Filter.module.scss';

function Filter({ value, onChange }) {
  // const inputListId = nanoid(); htmlFor={inputListId}
  return (
    <>
      <label className={s.label}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        // id={inputListId}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Filter;
