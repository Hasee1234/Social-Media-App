import React from 'react'
import CreatePost from '../Components/CreatePost/CreatePost'
import FeedListing from '../Components/FeedListing/FeedListing'
import {useDispatch } from 'react-redux';
import { logout } from '../Store/Slices/AuthSlice';
const Home = () => {
  const dispatch=useDispatch()
  const handleLogout=()=>{
    dispatch(logout())
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <CreatePost/>
      <FeedListing/>
    </div>
  )
}

export default Home
