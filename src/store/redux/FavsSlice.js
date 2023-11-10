import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
    initialState:{
    favIds : [],
    },
    name:'FavActs',
    reducers:{
        AddFav:(state,action)=>{
            state.favIds.push(action.payload.id) // ask for id 
        },
        DeleteFav:(state,action)=> {
            state.favIds.splice(state.favIds.indexOf(action.payload.id)+1) // find the index of item
        }
    }

});

export const AddToFav = FavSlice.actions.AddFav;
export const DelFromFavs = FavSlice.actions.DeleteFav; // export actions to can use it in other pages 

export default FavSlice.reducer; // export the reducer to configure all reducers in store