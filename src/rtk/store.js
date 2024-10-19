// store.js
import { configureStore } from "@reduxjs/toolkit";
import animeTrendingReducer from "./Slices/anime-tranding-slice"; // Correct reducer import
import FeaturedAnimeReducer from "./Slices/FeaturedAnimes-slice";
import LatestEpisodesSlice from "./Slices/LatestEpisodes-Slice";

export const store = configureStore({
  reducer: {
    animeTrending: animeTrendingReducer, 
    animeFeatured: FeaturedAnimeReducer,
    animeLatestEp: LatestEpisodesSlice,

  }
});

export default store;
