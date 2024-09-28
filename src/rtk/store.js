// store.js
import { configureStore } from "@reduxjs/toolkit";
import animeTrendingReducer from "./Slices/anime-tranding-slice"; // Correct reducer import

export const store = configureStore({
  reducer: {
    animeTrending: animeTrendingReducer // Assign the correct reducer name
  }
});

export default store;
