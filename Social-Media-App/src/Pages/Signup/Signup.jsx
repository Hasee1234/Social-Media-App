import React,{useState} from 'react'
import {useDispatch } from 'react-redux';
import { signup } from '../../Store/Slices/AuthSlice';

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [ gender, setGender] = useState("")

    const dispatch = useDispatch()
    
    
    const handleSignup = () => {
        let user = {
            email,
            password,
            name,
            phone,
            address,
            gender
        }
        console.log("Signup clicked",user);
        dispatch(signup(user))
    }

  return (
    <div>
        <h1>Signup</h1>
        <label >Enter your email:</label>
        <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
        <br/>
        <label >Enter password:</label>
        <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
        <br/>
        <label >Enter your name:</label>
        <input type="text" placeholder="name" onChange={(e)=> setName(e.target.value)}/>
        <br/>
        <label >Enter your phone No.</label>
        <input type="text" placeholder="phone" onChange={(e)=> setPhone(e.target.value)}/>
        <br/>
        <label>Enter your address</label>
        <input type="text" placeholder="address" onChange={(e)=> setAddress(e.target.value)}/>
        <br/>
        <label>Male</label>
        <input type="radio" name="gender" value="male" onChange={()=> setGender("male")}/>
        <br/>
        <label>Female</label>
        <input type="radio" name="gender" value="female"  onChange={()=> setGender("female")} />
        <br/>
        <button onClick={handleSignup}>Signup</button>
    </div>
  )
}
