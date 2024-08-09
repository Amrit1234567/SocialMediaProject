import React, { useEffect, useState } from "react";
import axios from 'axios';
import './post.css';


function Comment({ post_id, user_id }) {
    const [comments, setComments] = useState([]);
    const [actual_comment, setNewComment] = useState('');
    
    const fetchComments = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/app/comment/${post_id}`);
            if (res.data) {
                setComments(res.data);
            } else {
                setComments([]);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const postComments = async (post_id) => {
        const data = {user_id, post_id, actual_comment}
        console.log(data)
        const res = await axios.post(`http://127.0.0.1:8000/app/comment/${post_id}`,data)
        fetchComments()
        setNewComment('');
    }
    useEffect(() => {
        fetchComments();
    }, [actual_comment]);

    return (
        <div className="commentwrapper">
            {comments.length > 0 ? (
                comments.map(comment => (
                    <div className="comment clearfix" key={comment.comment_id}>
                        <p className='user'>User ID: {comment.user_id}</p>
                        <p className="acomment">{comment.actual_comment}</p>
                    </div>
                ))
            ) : (
                <span />
            )}
            <input id="actualcomment" placeholder="Enter new comment" value={actual_comment} onChange={(e) => setNewComment(e.target.value)}/>
            <button onClick={()=>postComments(post_id)}type="submit">Post</button>
        </div>
    );
}
export default Comment;