// src/features/data/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { DataStoreType } from "../utils/types";

// Async thunk for fetching data
export const fetchData = createAsyncThunk("data/fetchData", async (_, thunkAPI) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/mainVideoBelajar`);
    if (!res.ok) throw new Error("Error fetching data");
    const data = await res.json();
    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const initialState: DataStoreType = {
  contents: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.contents = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
