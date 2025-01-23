import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Config/firebase";
import { addDoc, collection,getDocs,query,where,onSnapshot, orderBy, limit,doc,deleteDoc,updateDoc} from "firebase/firestore";

//update post
export const updatePost=createAsyncThunk(
    "feed/updatePost",
    async(post)=>{
        try{
            const docRef=doc(db,"Posts",post.id)
            await updateDoc(docRef,post)//you can also use getdoc but its hard update
                return post
            
        }
        catch(error){
            console.log("error",error)
        }
    }
)


//delete post
export const deletePost=createAsyncThunk(
    "feed/deletePost",
    async(id)=>{
        try{
            const docRef=doc(db,"Posts",id)
            await deleteDoc(docRef)
            return id 
        }
        catch(error){
            console.log("error",error)
        }
    }

)


export const getPosts=createAsyncThunk(
    "feed/getPost",
    async()=>{
        try{
            //query learning
            const collectionRef=collection(db,"Posts")
            const queryRef=query(collectionRef,where("title","!=","shirt"))//for single where
            // const queryRef=query(collectionRef,where("title","==","shirt"),where("title","==","jeans"))//to pass two condition use two where,
            // const queryRef=query(collectionRef,or(where("title","==","shirt"),where("title","==","jeans")))// //also can use or and and
            // orderby(to order things) and limit(to limit number of results)
            // const queryRef=query(collectionRef,where("title","==","title 1"),orderBy("title"),limit(3))//for limit the upto 3 results
            
            
            //one time data
            // const docs=await getDocs(collectionRef)
            const docs=await getDocs(queryRef)
            let data=[]
            console.log("docs",docs)
            docs.forEach((doc)=>{
                console.log("doc", doc.data());
                console.log("doc id", doc.id);
                data.push({
                    id:doc.id,
                    //every collection has an id and data that we can access by doc .data and doc.id
                    ...doc.data()
                })
                console.log("data",data)
            })
            return data

            
             //real time data read using onsnapshot
        //  let data = []
        //  onSnapshot(collectionRef, (querySnapshot) => {
        //      //collectionref the collection that wa wannt to make real timeand the querysnapshot is docs you can also name it doc 
        //      querySnapshot.forEach((doc) => {
        //          console.log("doc",doc.data());
        //          data = [...data,{id:doc.id,...doc.data()}]
        //      })
        //      console.log("data",data);   
        //      return data
        //  });
     }
             
        catch(error){
            console.log("error",error)
        }
    })

export const createPost=createAsyncThunk(
    "feed/CreatePost",
    async(post)=>{
        try{
            console.log("post here", post)
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
        updatePost:null,
    },
    reducers:{
        addFeed:(state,action)=>{
            console.log("action in addFeed",action.payload)
        },
        updateDocId:(state,action)=>{
            console.log("action in updateDocId",action.payload)
            let post=state.updatePost=state.feed.filter((post)=>post.id ===action.payload)
            state.updatePost=post[0]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.feed=[action.payload,...state.feed]
        })
        
        .addCase(getPosts.fulfilled, (state, action) => {
            state.feed = action.payload; // Replace the feed with fetched posts
        })
        .addCase(deletePost.fulfilled,(state,action)=>{
            state.feed=state.feed.filter((post)=>post.id!==action.payload)
        })
        .addCase(updatePost.fulfilled,(state,action)=>{
            state.feed=state.feed.map((post)=>{
                if(post.id === action.payload.id){
                    return action.payload
                }
                return post
            })
            state.updatePost=null
        })
    }
    
})
export const {addFeed,updateDocId}=feedSlice.actions
export default feedSlice.reducer