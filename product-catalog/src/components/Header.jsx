import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/productsSlice';

const Header = ({ setSortKey }) => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.products);

  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wide">Product Catalog</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 bg-white text-gray-800 rounded-lg focus:outline-none shadow hover:shadow-lg transition"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setSortKey(e.target.value)}
            className="p-2 bg-white text-gray-800 rounded-lg focus:outline-none shadow hover:shadow-lg transition"
          >
            <option value="">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="ratingHighLow">Rating: High to Low</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
