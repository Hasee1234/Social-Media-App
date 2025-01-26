
import React,{useState,useEffect} from 'react'
import Button from '../Button/Button';
import FeedListing from '../FeedListing/FeedListing';
import { useSelector,useDispatch } from 'react-redux';
import { createPost,updatePost } from '../../Store/Slices/feedSlice';

const CreatePost = () => {
    
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [ImageURL, setImageURL] = useState("")
        const [loading, setLoading] = useState(false);
        const [file, setfile] = useState(null)

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
                ImageURL
            }  
            if(post){
              dispatch(updatePost({...postData,id:post.id}))
              return
            }
            dispatch(createPost(postData))
        }


        const ChangeImage=(e)=>{
          console.log("e",e.target.files[0]);
          const file=e.target.files[0]
          setfile(file)
        }


        const uploadImage = async (e) => {
          try {
            setLoading(true);
            const file = e.target.files[0];
            if (!file) {
              console.log("No file selected");
              setLoading(false);
              return;
            }
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "social media app");
            data.append("cloud_name", "dd22qjrpn");
            const res = await fetch("https://api.cloudinary.com/v1_1/dd22qjrpn/image/upload", {
              method: "POST",
              body: data,
            });
            const uploadedImage = await res.json();
            if (uploadedImage.secure_url) {
              console.log("Uploaded image URL:", uploadedImage.secure_url);
              setImageURL(uploadedImage.secure_url);
            } else {
              console.log("Upload failed:", uploadedImage);
            }
          } catch (error) {
            console.error("Error uploading image:", error);
          } finally {
            setLoading(false);
          }
        };  
  return (
    <div>
       <h1>Create Post</h1>
        <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <textarea  value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <br />
        {/* <input style={{ margin: "5" }} type="file" onChange={uploadImage} disabled={loading}/> */}
        <input style={{ margin: "5" }} type="file" onChange={ChangeImage} disabled={loading}/>
        {loading && <p>Uploading image...</p>}

        <br />
        <Button onClickHandler={createPostHandler} title={post?"UpdatePost":"CreatePost"} />
        <FeedListing/>
    </div>
  )
}

export default CreatePost
