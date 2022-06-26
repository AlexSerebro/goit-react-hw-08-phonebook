import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => (
  <nav>
    <NavLink
      end
      exact="true"
      to="/"
      className={({ isActive }) => (isActive ? s.link_active : s.link)}
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? s.link_active : s.link)}
    >
      Phonebook
    </NavLink>
  </nav>
);
