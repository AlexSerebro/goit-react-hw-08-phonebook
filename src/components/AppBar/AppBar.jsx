import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Navigation } from '../Navigation';
import s from './Appbar.module.css';

export function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <AuthNav />
      <UserMenu />
    </header>
  );
}
