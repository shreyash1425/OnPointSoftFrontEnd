import React from 'react';
import './App.css'; 
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>My Shop</h1>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
