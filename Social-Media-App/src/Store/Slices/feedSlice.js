import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Config/firebase";
import { addDoc, collection,getDocs } from "firebase/firestore";



export const getPosts=createAsyncThunk(
    "feed/getPost",
    async()=>{
        try{
            const collectionRef=collection(db,"posts")
            const docs=await getDocs(collectionRef)
            let data=[]
            console.log("docs",docs)
            docs.forEach((doc)=>{
                console.log("doc", doc.data());
                console.log("doc id", doc.id);
                data.push({
                    id:doc.id,//every collection has an id and data that we can access by doc .data and doc.id
                    ...doc.data()
                })
                // console.log("data",data)
            })
            return data
     }
             
        catch(error){
            console.log("error",error)
        }
    })

export const createPost=createAsyncThunk(
    "feed/CreatePost",
    async(post)=>{
        try{
            const collectionRef=collection(db,"Posts")//in add doc function you pass two parameters in 1st is collection name and db which we stored ijn collectionRef
            const response=await addDoc(collectionRef,post);//added new post in firebase
            console.log("response after firebase store",response);
        }catch(error){
            console.log("error",error)
        }
    return post
    }
)

const feedSlice=createSlice({
    name:"feed",
    initialState:{
        feed:[],
    },
    reducers:{
        addFeed:(state,action)=>{
            console.log("action in addFeed",action.payload)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.feed=[action.payload,...state.feed]
        })
    }
})

export default feedSlice.reducer