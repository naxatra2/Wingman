import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/productsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="relative mb-6 mt-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-4 text-gray-700 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
