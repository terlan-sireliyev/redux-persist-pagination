// redux/productsSlice/productsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // ← Burada payload gəlir
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Məhsullar yüklənmədi!";
      });
  },
});

export default productSlice.reducer;
