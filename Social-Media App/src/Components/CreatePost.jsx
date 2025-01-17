
import React,{useState} from 'react'
import Button from './Button/Button';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
       <h1>Create Post</h1>
        <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <textarea  value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <br />
        <input style={{margin:'5'}} type="file" onChange={uploadImage} />
        <br />
        <Button />
    </div>
  )
}

export default CreatePost
