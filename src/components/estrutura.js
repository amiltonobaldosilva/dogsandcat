import React from "react";

const Header = () => (
  <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
    Pet Shop
  </header>
);

const Footer = () => (
  <footer className="bg-blue-500 text-white p-4 text-center mt-8">
    <div className="container mx-auto">
      <p>&copy; 2025 Pet Shop. Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">Política de Privacidade</a>
        <a href="#" className="hover:underline">Termos de Uso</a>
        <a href="#" className="hover:underline">Contato</a>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-white text-lg">🐶</a>
        <a href="#" className="text-white text-lg">🐱</a>
        <a href="#" className="text-white text-lg">🐾</a>
      </div>
    </div>
  </footer>
);

const products = [
  { id: 1, name: "Ração Premium", price: "R$ 50,00" },
  { id: 2, name: "Brinquedo de Borracha", price: "R$ 20,00" },
  { id: 3, name: "Coleira Ajustável", price: "R$ 30,00" },
  { id: 4, name: "Shampoo para Pets", price: "R$ 25,00" },
  { id: 5, name: "Caminha Confortável", price: "R$ 80,00" },
  { id: 6, name: "Petiscos Naturais", price: "R$ 15,00" },
  { id: 7, name: "Bebedouro Automático", price: "R$ 90,00" },
  { id: 8, name: "Arranhador para Gatos", price: "R$ 120,00" },
  { id: 9, name: "Tapete Higiênico", price: "R$ 40,00" },
  { id: 10, name: "Bolinha Interativa", price: "R$ 18,00" }
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao Pet Shop!</h1>
        <p className="mt-4 text-lg">Aqui você encontra tudo para o seu pet.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
