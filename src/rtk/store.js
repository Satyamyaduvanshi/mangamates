// store.js
import { configureStore } from "@reduxjs/toolkit";
import animeTrendingReducer from "./Slices/anime-tranding-slice"; // Correct reducer import
import FeaturedAnimeReducer from "./Slices/FeaturedAnimes-slice";

export const store = configureStore({
  reducer: {
    animeTrending: animeTrendingReducer, // Add a comma here
    animeFeatured: FeaturedAnimeReducer, // Assign the correct reducer name
  }
});

export default store;
