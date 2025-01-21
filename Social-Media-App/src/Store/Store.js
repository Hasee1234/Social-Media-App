import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./Slices/feedSlice"


export const store=configureStore({
    reducer:{
        feedSlice:feedReducer,
    }
});
