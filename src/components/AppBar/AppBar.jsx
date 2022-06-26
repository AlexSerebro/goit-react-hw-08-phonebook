import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Navigation } from '../Navigation';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import s from './Appbar.module.css';

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={s.fixed}>
      <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
}
