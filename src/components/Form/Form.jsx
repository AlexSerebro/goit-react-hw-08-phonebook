import style from './Form.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleaddContact = (name, number) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`You have already had ${name} in your contacts`);
      return;
    }
    const contact = {
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
  };

  const hendleChange = e => {
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
    handleaddContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        <p className={style.text}>Name</p>
        <input
          className={style.input_name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={hendleChange}
        />
      </label>
      <label>
        <p className={style.text}>Number</p>
        <input
          className={style.input_name}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={hendleChange}
        />
        <button type="submit" className={style.button}>
          Add contact
        </button>
      </label>
    </form>
  );
}
