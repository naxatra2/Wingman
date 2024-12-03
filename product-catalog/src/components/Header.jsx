import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/productsSlice";
import "./header.css";

const Header = ({ setSortKey, setSearchQuery }) => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.products);

  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold cursor-pointer">
            Product Catalog <span className="text-yellow-300">.</span>
          </h1>
        </div>

        {/* Dropdowns */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 bg-white text-gray-700 rounded-md shadow focus:outline-none"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Sorting Dropdown */}
          <select
            onChange={(e) => setSortKey(e.target.value)}
            className="p-2 bg-white text-gray-700 rounded-md shadow focus:outline-none"
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
