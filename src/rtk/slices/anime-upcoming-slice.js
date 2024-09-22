import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";
import axios from "axios";
import { act } from "react";

const axiosInstance=axios.create({
    baseURL:"https://api.jikan.moe/v4/", 
})

export const fetchUpcomingAnime = createAsyncThunk(
    "animeUpcomingSlice/fetchUpcomingAnime",
    async() =>{
        return retryRequest(
            () => axiosInstance.get("seasons/upcoming"),
            3,
            1000
        )
    }
)

const retryRequest = async (requestFunction, maxRetries, initialDelay) =>{
    let delay = initialDelay;

    for(let attempt =1; attempt<= maxRetries; attempt++){
        try {
            const response = await requestFunction();
            return response.data.data
        } catch (error) {
            if (error.response && error.response.status === 429) {
                await new Promise((resolve) => setTimeout(resolve, delay));
                delay *= 2;
              } else {
                throw error;
              }
        }
    }
    throw new Error("max retries reached")
}

const animeUpcomingSlice = createSlice({
    name:"animeUpcomingSlice",
    initialState: {
        data:[],
        loading : false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpcomingAnime.fulfilled, (state, action)=>{
            state.data = action.payload
        })
    }
})

export default animeUpcomingSlice.reducer