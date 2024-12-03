import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './features/productsSlice';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';
import ReactPaginate from 'react-paginate';

function App() {
  const dispatch = useDispatch();
  const { products, searchQuery, status } = useSelector((state) => state.products);
  const [sortKey, setSortKey] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortKey === 'priceLowHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortKey === 'priceHighLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortKey === 'ratingHighLow') {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  const offset = currentPage * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(offset, offset + itemsPerPage);

  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
  };

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
      <SortBar setSortKey={setSortKey} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
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
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'pagination flex justify-center space-x-2 mt-4'}
        previousLinkClassName={'bg-blue-500 text-white px-3 py-1 rounded-lg'}
        nextLinkClassName={'bg-blue-500 text-white px-3 py-1 rounded-lg'}
        disabledClassName={'opacity-50 cursor-not-allowed'}
        activeClassName={'bg-blue-700 text-white px-3 py-1 rounded-lg'}
      />
    </div>
  );
}

export default App;
