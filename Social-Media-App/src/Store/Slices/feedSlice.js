import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Config/firebase";
import { addDoc, collection } from "firebase/firestore";

export const CreatePost=createAsyncThunk(
    "feed/CreatePost",
    async(post)=>{
        try{
            const collectionRef=collection(db,"Posts")//in add doc function you pass two parameters in 1st is collection name and db which we stored ijn collectionRef
            const response=await addDoc(collectionRef,post);
            console.log("response after firebase store",response);
        }catch(error){
            console.log("error",error)
        }
    return post
    }
)

