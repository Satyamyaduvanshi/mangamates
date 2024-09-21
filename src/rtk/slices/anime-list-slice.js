import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const axiosInstance = axios.create({
    baseURL: ""
})

export const fetchAnimeList = createAsyncThunk(
    "animeListSlice/fetchAnimeList",
    async(url,bulletID)=>{
        const maxRetries = 3;
        const initialDelay = 1000;
        let delay = initialDelay;
        for(let attempt = 1; attempt<=maxRetries; attempt++){
            try{
                const response = await axiosInstance.get(url)
                return response.data.data;
            }catch(error){
                if(error.response && error.response.status === 429){
                    await new Promise((resolve)=> setTimeout(resolve,delay))
                    delay *=2
                }else{
                    throw error
                }
            }
        }

    }
)

export const fetchTopAnime = createAsyncThunk(
    "animeListSlice/fetchTopAnime",
    async()=>{
        const maxRetries = 3;
        const initialDelay= 1000;
        let delay = initialDelay
        for(let attempt =1 ; attempt <= maxRetries; attempt++){
            try {
                const response = await axiosInstance.get("top/anime")
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
        throw new error("max retries reached")
    }
)



export const animeListSlice = createSlice({
    name: "animeListSlice",
    initialState:{
        data:[]
    },
    reducers: {
        clearAnime: (state)=>{
            state.data = []
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchAnimeList.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})

export const { clearAnime } = animeListSlice.actions
export default animeListSlice.reducer