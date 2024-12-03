import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products from the API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

// Products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    searchQuery: '',
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; // Update the search query
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
      });
  },
});

export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
