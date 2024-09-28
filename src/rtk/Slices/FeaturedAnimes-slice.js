import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api-anime-rouge.vercel.app/aniwatch",
});

// Async thunk to fetch featured anime
export const fetchFeaturedAnime = createAsyncThunk(
  'FeaturedAnimeSlice/fetchFeaturedAnime',
  async () => {
    try {
      const response = await axiosInstance.get('/');
      console.log(response.data.featuredAnimes);
      return response.data.featuredAnimes;
    } catch (error) {
      console.error("Error fetching featured animes:", error);
      throw error;
    }
  }
);

// Create the slice
const FeaturedAnimeSlice = createSlice({
  name: 'FeaturedAnimeSlice',
  initialState: {
    featuredanime: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedAnime.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeaturedAnime.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.featuredanime = action.payload;
      })
      .addCase(fetchFeaturedAnime.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default FeaturedAnimeSlice.reducer;
