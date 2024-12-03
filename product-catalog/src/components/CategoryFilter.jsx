import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/productsSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.products);

  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="p-2 border border-gray-300 rounded-lg mb-4"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
