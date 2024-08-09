import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './post.css';
import NavBar from '../NavBar';
import CreatePost from './CreatePost';
import Cookies from 'js-cookie';
import Comment from './comment';
import Like from './like';

function Post() {
  const [posts, setPost] = useState([])
  const [user_id, setUserId] = useState(2)
  const getData = async (user_id) => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/app/post/${user_id}`);
      setPost(res.data)

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    const cookieValue = Cookies.get('user_id');
    console.log(cookieValue)
    if (cookieValue) {
      setUserId(cookieValue); // Access the cookie value
    }
    getData(user_id);
  }, [user_id]);


  return (<div>
    <NavBar />
    <CreatePost />

    {posts.map(post => (
      <div key={post.post_id} className='post clearfix'>
        <p className='user'>User ID: {post.user_id}</p>
        <p className='content'>{post.content}</p>
        <img src={"http://127.0.0.1:8000/" + post.image} alt="Post Image" />
        <div>
          <Like post={post} user_id={user_id} />
        </div>
        <br /><br />
        <Comment post_id={post.post_id} user_id={user_id} />
      </div>
    ))}
  </div>
  )
}
export default Post