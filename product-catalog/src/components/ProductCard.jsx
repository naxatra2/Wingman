import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-36 object-contain mb-4 rounded-lg border border-gray-200 dark:border-gray-700"
      />
      <h2 className="text-md font-semibold text-gray-800 dark:text-white truncate">
        {product.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-yellow-500 font-bold mt-2 text-sm">
        ⭐ {product.rating.rate.toFixed(1)} / 5
      </p>
      <button className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;