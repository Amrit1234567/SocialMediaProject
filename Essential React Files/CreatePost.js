import axios from 'axios';
import React, { useState,useEffect } from 'react'
import './post.css';
import Cookies from 'js-cookie';


function CreatePost(props){
    const [user_id, setUserId] = useState(props.user_id);
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handlepost =(e)=>{
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("user_id", user_id)
        formdata.append("content", content)
        formdata.append("image", image)
        setContent("")
        setImage("")
        // const post = {user_id, content, image};
        axios.post("http://127.0.0.1:8000/app/post/", formdata).then(res=>console.log(res)).catch(err=> console.log(err))
        
    }
    useEffect(() => {
        const cookieValue = Cookies.get('user_id');
        if (cookieValue){
          setUserId(cookieValue); // Access the cookie value
        }
      }, []);
    return(
        <div>
            <form id="postdata" onSubmit={handlepost}>

                <label>Content</label><br/>
                <textarea 
                    required
                    placeholder='Whats on my mind'
                    rows="4" 
                    cols="50"
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                />
                <br/>

                <label>Upload Image</label>
                <input 
                    type='file'
                    onChange={(e)=> setImage(e.target.files[0])}
                />
                <br/>

                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default CreatePost