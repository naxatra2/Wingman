import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';

const SortBar = ({ setSortKey }) => {
  const [selected, setSelected] = useState('');

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    setSortKey(value);
  };

  return (
    <div className="flex justify-end mb-4">
      <select
        value={selected}
        onChange={handleSortChange}
        className="p-2 border border-gray-300 rounded-lg"
      >
        <option value="">Sort By</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="ratingHighLow">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default SortBar;
