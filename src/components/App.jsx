import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from './PhoneBook';
import Container from './Container/Container';
import { AppBar } from './AppBar';
import { HomeView } from 'views/HomeView/HomeView';
import { LoginView } from 'views/LoginView/LoginView';
import RegisterView from 'views/RegisterView/RegisterView';
import { fetchCurrentUser } from '../redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route exact="true" path="/" element={<HomeView />} />
          <Route path="phonebook" element={<PhoneBook />} />
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
