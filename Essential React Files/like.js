import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Like({ post, user_id }){
    const [disabled, setDisabled] = useState(false);
    const [likeCount, setLikeCount] = useState(post.like_count);
    const [likeData, setLikeData] = useState('');

    const getData=async()=>{
        const {data} = await axios.get(`http://127.0.0.1:8000/app/react/${post.post_id}/${user_id}`);
        setLikeData(data);
        const icon = document.getElementsByClassName("icon");
        if (data.length > 0){
            setDisabled(true);
        }
        console.log(icon.style)
    }
    
    useEffect(() => {
        getData();
    }, []);


    const handleClick = ()=>{
        if (!disabled){
        setDisabled(true)
        axios.post(`http://127.0.0.1:8000/app/react/${post.post_id}/${user_id}`)
        setLikeCount(likeCount + 1)
        }
    }
    return(
        <div>
            <p className={`likes ${disabled?'red':'blue'}`}>{likeCount}</p>
            
            <i onClick={handleClick} className={`fa fa-thumbs-up icon ${disabled?'red':'blue'}`} aria-hidden="true"></i>
           
        </div>
    )
}
export default Like;