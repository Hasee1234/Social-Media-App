
import React,{useState} from 'react'
import Button from '../Button/Button';
import FeedListing from '../FeedListing/FeedListing';

const CreatePost = () => {
    
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");

    const createPostHandler=()=>{
        console.log("Title",title)
        console.log("description",description)
        let post = {
            title,
            description,
            createAt: new Date(),
            imageURL:"https://via.placeholder.com/150"
        }
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
        <Button onClickHandler={createPostHandler} title={"CreatePost"} />
        <FeedListing/>
    </div>
  )
}

export default CreatePost
