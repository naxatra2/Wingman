import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './features/productsSlice';
import SearchBar from './components/SearchBar';

function App() {
  const dispatch = useDispatch();
  const { products, searchQuery, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the component mounts
  }, [dispatch]);

  // Define filteredProducts to filter products based on searchQuery
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === 'loading') {
    return <p className="text-white">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-white">Failed to load products.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Product Catalog</h1>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.title}
            </h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-yellow-500 font-bold">
              ⭐ {product.rating.rate.toFixed(1)} / 5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
