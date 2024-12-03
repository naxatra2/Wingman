import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/productsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
