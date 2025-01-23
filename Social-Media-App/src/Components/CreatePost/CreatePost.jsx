
import React,{useState,useEffect} from 'react'
import Button from '../Button/Button';
import FeedListing from '../FeedListing/FeedListing';
import { useSelector,useDispatch } from 'react-redux';
import { createPost,updatePost } from '../../Store/Slices/feedSlice';

const CreatePost = () => {
    
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const post=useSelector(store=>store.feedSlice.updatePost)
        const dispatch=useDispatch()

    
        useEffect(() => {
          if(post){
            setTitle(post.title)
            setDescription(post.description)
          }else{
            setTitle("")
            setDescription("")
          }  
          
          }, [post])
          

          const createPostHandler=()=>{
            console.log("Title",title)
            console.log("description",description)
            let postData = {
                
                title,
                description,
                createAt: new Date(),
                imageURL:"https://via.placeholder.com/150"
            }
            if(post){
              dispatch(updatePost({...postData,id:post.id}))
              return
            }
            dispatch(createPost(postData))
        }
  return (
    <div>
       <h1>Create Post</h1>
        <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <textarea  value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <br />
        <input style={{margin:'5'}} type="file"  />
        <br />
        <Button onClickHandler={createPostHandler} title={post?"UpdatePost":"CreatePost"} />
        <FeedListing/>
    </div>
  )
}

export default CreatePost
