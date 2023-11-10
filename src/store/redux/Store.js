import {combineReducers, configureStore} from '@reduxjs/toolkit';
import FavsSlice from './FavsSlice';

const Store = configureStore({
    reducer:{
        FavMeals  : FavsSlice 
    }
})

export default Store;
