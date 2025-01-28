import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./Slices/feedSlice"
import authReducer from './Slices/AuthSlice'

export const store=configureStore({
    reducer:{
        feedSlice:feedReducer,
        authSlice:authReducer
    }
});
