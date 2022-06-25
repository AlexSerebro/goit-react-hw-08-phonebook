import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div>
      <h1>Register page</h1>

      <form onSubmit={() => {}} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={() => {}} />
        </label>

        <label className={s.label}>
          Email
          <input type="email" name="email" value={email} onChange={() => {}} />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={() => {}}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
