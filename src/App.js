// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

document.title = 'PeShop Nutrientes';
function App() {
  return (
    <div className="App">
      <h1>Bem-vindo à PetShop Nutrientes</h1>
      <ProductList />
    </div>
  );
}

export default App;
