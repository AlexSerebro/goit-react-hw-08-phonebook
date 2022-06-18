import style from './PhoneBook.module.css';
import { useEffect } from 'react';
import { Section } from '../Section/';
import { Form } from '../Form';
import { Contacts } from './Contacts';
import { Filter } from '../Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function PhoneBook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
