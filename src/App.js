// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

document.title = 'PeShop Nutrientes';
function App() {
  return (
    <div className="App">
 <header className="App">
      <main className="flex-1 p-8 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao Pet Shop Nutriente!</h1>
        <p className="mt-4 text-lg">Aqui você encontra tudo para o seu pet.</p>
      </main>
	
  </header>
  <ProductList />
	    <footer className="bg-blue-500 text-white p-4 text-center mt-8">
    <div className="container mx-auto">
      <p>&copy; 2025 Pet Shop Nutrientes - Grupo Mercado Imenso.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.mercadoimenso.com.br" className="hover:underline">Política de Privacidade</a>
        <a href="https://www.mercadoimenso.com.br" className="hover:underline">Termos de Uso</a>
        <a href="https://www.mercadoimenso.com.br" className="hover:underline">Contato</a>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.mercadoimenso.com.br" className="text-white text-lg">🐶</a>
        <a href="https://www.mercadoimenso.com.br" className="text-white text-lg">🐱</a>
        <a href="https://www.mercadoimenso.com.br" className="text-white text-lg">🐾</a>
      </div>
    </div>
  </footer>
    </div>
	
  );
  
}

export default App;