import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Button } from '@mui/material';
import s from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink
        end
        exact="true"
        to="goit-react-hw-08-phonebook/"
        className={({ isActive }) => (isActive ? s.link_active : s.link)}
      >
        <Button variant="outlined">Home</Button>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.link_active : s.link)}
        >
          <Button variant="outlined">Phonebook</Button>
        </NavLink>
      )}
    </nav>
  );
};
