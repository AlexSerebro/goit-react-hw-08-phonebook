import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import s from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact="true"
        className={({ isActive }) => (isActive ? s.link_active : s.link)}
      >
        <Button variant="outlined">Register</Button>
      </NavLink>
      <NavLink
        to="/login"
        exact="true"
        className={({ isActive }) => (isActive ? s.link_active : s.link)}
      >
        <Button variant="outlined">Login</Button>
      </NavLink>
    </div>
  );
}
