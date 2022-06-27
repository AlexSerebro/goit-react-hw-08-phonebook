import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import defaultAvatar from './default-avatar.png';
import { Button } from '@mui/material';
import s from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Wellcome, {name}</span>
      <Button variant="contained" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}
