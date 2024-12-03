import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchCategories } from './features/productsSlice';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import ProductCard from './components/ProductCard';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const { products, searchQuery, selectedCategory, status } = useSelector(
    (state) => state.products
  );
  const [sortKey, setSortKey] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  let filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
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
    return <p className="text-gray-800 dark:text-white">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-gray-800 dark:text-white">Failed to load products.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Header setSortKey={setSortKey} />
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default App;
