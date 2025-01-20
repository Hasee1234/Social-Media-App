import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Button from '../Button/Button'
import { getPosts } from '../../Store/Slices/feedSlice';
export default function FeedListing() {

    const feed=useSelector(store=>store.feedSlice.feed)//take the feed key(which is empty at start) from feedslice which is made in store
    const dispatch=useDispatch()
    const handleClick=()=>{
        console.log("get posts clicked");
        dispatch(getPosts())
    }
  return (
    <div>
      <h1>Feed Listing</h1>
      <Button title={"get Posts"} onClickHandler={handleClick}/>
      {
        feed?.map((post)=>{
            return(
                <div key={post.id}>
                    <h3>{post?.title}</h3>
                    <p>{post?.description} </p>

                </div>
            )
        })
      }
    </div>
  )
}
