import { useState, useEffect } from 'react';
import './App.css';
import Productlist from './productlist';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function APIcall() {
      const response = await fetch('https://e-com-full-stack-1.onrender.com/api/products');
      const data = await response.json();
      console.log(data);
      setProducts(data.products || []);
    }

    APIcall();
  }, []);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Featured Products</h1>
      </header>

      <div className="product-grid">
        {products.map((product) => (
          <Productlist key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
