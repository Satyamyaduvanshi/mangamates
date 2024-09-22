import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.jikan.moe/v4/",
})

export const fetchRecommendationAnime = createAsyncThunk(
    "animeRecomSlice/fetchRecommendationAnime",
    async(url)=>{
        const maxRetries =3
        const initialDelay = 1000
        let delay = initialDelay

        for(let attempt = 1; attempt<=maxRetries; attempt++){
            try {
                const response = await axiosInstance.get(url);
                return response.data.data
            } catch (error) {
                if(error.response && error.response.status === 429){
                    await new Promise((resolve) => setTimeout(resolve,delay));
                    delay *=2
                }
                else{
                     throw error
                }
            }
        }
        throw new Error("max retries reached")
    }
)

const animeRecomSlice = createSlice({
    name: "animeRecomSlice",
    initialState: {
        data: [],
        loading : false,
        error: null,

    },
    reducers: {
        clearRecommendationAnime: (state)=>{
            state.data = []
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchRecommendationAnime.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})

export const {clearRecommendationAnime} = animeRecomSlice.actions

export default animeRecomSlice.reducer