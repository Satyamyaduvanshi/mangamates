import { createSlice} from "@reduxjs/toolkit";
const myListSlice = createSlice({
    name: "myListSlice",
    initialState: {
        watchingList: [],
        planToWatchList: [],
        watchedList: [],
        favoriteList:[],
        badList:[],
    },
    reducers: {
        addToWatchingList: (state,action)=>{
            state.watchingList.push(action.payload)
        },
        addToPlanToWatchingList: (state,action)=>{
            state.planToWatchList.push(action.payload)
        },
        addToWatchedList: (state,action)=>{
            state.watchedList.push(action.payload)
        },
        addToFavoriteList: (state,action)=>{
            state.favoriteList.push(action.payload)
        },
        addToBadList: (state,action)=>{
            state.badList.push(action.payload)
        }
    }
})

export const {
    watchedList,
    planToWatchList,
    watchingList,
    favoriteList,
    badList,
}= myListSlice.actions

export default myListSlice.reducer