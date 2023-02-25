import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Products from './features/products/Products';
import NewProduct from './features/products/NewProduct';
import Register from './features/users/Register';
import Login from './features/users/Login';

const App = () => {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products/new" element={<NewProduct/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Container>
      </main>
    </>
  );
}
export default App;
