//authSlice

import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../Config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export const signup = createAsyncThunk(
    'auth/signup',
    async (user) => {
        try {
            const userCredential=  await createUserWithEmailAndPassword(auth,user.email,user.password)
            let saveUserTodb={
                email:user.email,
                name: user.name,
                phone:user.phone,
                address:user.address,
                gender:user.gender,
                uid:userCredential.user.uid

            }
            await addDoc(collection(db,"users"),(saveUserTodb))
            return saveUserTodb

        } catch (error) {
            console.log("error", error);  
        }
    }
)


export const login =createAsyncThunk(
    'auth/login',
    async(user)=>{
        return user
    }
)

const initialState={
    user: null
}

const authSlice=createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(signup.fulfilled,(state,action)=>{
            console.log("action",action.payload);
            
            state.user=action.payload
        })
    }
})

export const {setUser}=authSlice.actions
export default authSlice.reducer