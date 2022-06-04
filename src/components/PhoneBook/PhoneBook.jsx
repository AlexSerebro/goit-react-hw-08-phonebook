import style from './PhoneBook.module.css';
import { useEffect } from 'react';
import { Section } from '../Section/';
import { Form } from '../Form';
import { Contacts } from './Contacts';
import { Filter } from '../Filter';
import { updContacts } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export function PhoneBook() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      dispatch(updContacts(JSON.parse(localStorage.getItem('contacts'))));
    }
  }, [dispatch]);

  return (
    <Section title="PhoneBook">
      <Form />
      <p className={style.text}>Contacts</p>
      <Filter />
      <Contacts />
    </Section>
  );
}
