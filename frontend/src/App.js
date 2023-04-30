import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

import Container from 'react-bootstrap/Container';
import React from 'react';
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand href="#home">Amazon</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>

        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>

        <footer>
          <div className="text-center">All Right Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
