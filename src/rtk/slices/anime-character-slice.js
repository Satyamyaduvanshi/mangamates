import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL :  "https://api.jikan.moe/v4/",
})

export const fetchRandomCharacter = createAsyncThunk(
    "animeRandomCharacter/fetchRandomCharacter",
    async(url) => {
        const res = await axiosInstance.get(url);
        return res.data;
    }

)

const animeRandomCharacter = createSlice({
    name: "animeRandomCharacter",
    initialState : {
        data: [],
        loading: false,
        error: null,
        
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchRandomCharacter.pending,(state)=>{
            state.loading = true
        })
        
        .addCase(fetchRandomCharacter.fulfilled,(state,action)=>{
            state.data = action.payload
        })
       
        .addCase(fetchRandomCharacter.rejected,(state,action)=>{
            state.error = action.error.message
        })
    }
})

export default animeRandomCharacter.reducer;