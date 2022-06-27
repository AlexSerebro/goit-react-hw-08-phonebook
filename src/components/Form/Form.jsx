import style from './Form.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const hendleaddContact = (name, number) => {
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

  const hendleSubmit = e => {
    e.preventDefault();
    hendleaddContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={hendleSubmit}
      sx={{ mt: 3 }}
      className={style.form}
    >
      <Typography component="h1" variant="h5" className={style.text}>
        Phonebook
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            type="text"
            name="name"
            required
            fullWidth
            id="Name"
            label="Name"
            autoFocus
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={hendleChange}
          />
        </Grid>
        <Grid item xs={12} className={style.grid}>
          <TextField
            required
            fullWidth
            type="tel"
            id="tel"
            label="Telephone"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={hendleChange}
            className={style.input}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={style.wraper}>
          <Button
            type="submit"
            variant="contained"
            id="add"
            className={style.buttonAddContacts}
          >
            Add contact
          </Button>
        </div>
      </Grid>
    </Box>
  );
}
