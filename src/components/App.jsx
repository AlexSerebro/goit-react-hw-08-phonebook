import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from './PhoneBook';
import Container from './Container/Container';
import { AppBar } from './AppBar';

export const App = () => {
  return (
    <Container>
      <AppBar />

      {/* <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="phonebook" element={<PhoneBook />} />
        </Routes>
      </Suspense> */}
    </Container>
  );
};
