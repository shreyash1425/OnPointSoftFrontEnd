
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

import Navbar from 'react-bootstrap/Navbar'; 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch('/products.json') 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
          <Navbar bg="light" expand="lg">
      <Container> 
        <Navbar.Brand href="/">My E-Commerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </Router>
    </div>

    </>
  );
}

export default App;
