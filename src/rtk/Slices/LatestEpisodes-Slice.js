import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Await } from "react-router-dom";
import { build } from "vite";

const axiosInstance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api-anime-rouge.vercel.app/aniwatch",
})

export const fetchLatestEpiodes= createAsyncThunk(
    'LatestEpiodes/fetchLatestEpiodes',
    async()=>{
        try {
            const response = await axiosInstance.get('/')
            console.log(response.data.latestEpisodes);
            return response.data.latestEpisodes
        } catch (error) {
            console.log('error while fetching Latest episodes : ',error);
            throw error
            
        }
    }
)


const LatestEpiodesSlice = createSlice({
    name: 'LatestEpiodes',
    initialState:{
        LatestEpiode:[],
        status: "idle",
        error:null
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchLatestEpiodes.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.LatestEpiode = action.payload
        })
        .addCase(fetchLatestEpiodes.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchLatestEpiodes.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default LatestEpiodesSlice.reducer