import { Suspense, useEffect, lazy } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from './PhoneBook';
import Container from './Container/Container';
import { AppBar } from './AppBar';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { PublicRoute } from './UserMenu/PublicRoute';
import { getIsFetchingCurrent } from '../redux/auth/authSelectors';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  // console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path="/goit-react-hw-08-phonebook" element={<HomeView />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <PhoneBook />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts">
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/goit-react-hw-08-phonebook">
                  <RegisterView />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </Container>
    )
  );
};
