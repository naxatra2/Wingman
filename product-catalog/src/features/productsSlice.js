import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products from the API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

// Async thunk to fetch categories from the API
export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
});

// Products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categories: [],
    selectedCategory: '', // Default to show all categories
    searchQuery: '',
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; // Update the search query
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload; // Update the selected category
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload; // Store the products
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload; // Store categories
      });
  },
});

export const { setSearchQuery, setSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer;
