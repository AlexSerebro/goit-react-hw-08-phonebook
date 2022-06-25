import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact="true"
        className={({ isActive }) => (isActive ? s.link_active : s.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact="true"
        className={({ isActive }) => (isActive ? s.link_active : s.link)}
      >
        Login
      </NavLink>
    </div>
  );
}
