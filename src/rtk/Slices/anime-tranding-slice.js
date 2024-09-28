// Slices/anime-tranding-slice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Axios instance with baseURL and timeout
const axiosInstance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api-anime-rouge.vercel.app/aniwatch",
  });
  
  
  export const fetchTrendingAnime = createAsyncThunk(
    "animeTrendingSlice/fetchTrendingAnime",
    async () => {
      try {
        const response = await axiosInstance.get('/'); 
        console.log(response.data.trendingAnimes); 
        return response.data.trendingAnimes; 
      } catch (error) {
        console.error("Error fetching trending animes:", error);
        throw error; 
      }
    }
  );
  

// Slice for handling trending anime state
const animeTrendingSlice = createSlice({
  name: "animeTrendingSlice",
  initialState: {
    trendingAnimes: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {
    clearTrendingAnime: (state) => {
      state.trendingAnimes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingAnime.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingAnime.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trendingAnimes = action.payload; // Save the fetched trendingAnimes data
      })
      .addCase(fetchTrendingAnime.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { clearTrendingAnime } = animeTrendingSlice.actions;
export default animeTrendingSlice.reducer;
