import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './post.css';


function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        axios.get('/app/csrf').then(response => {
            axios.defaults.headers.post['X-CSRFToken'] = response.data.csrfToken;
        });
    }, []);
    
    function handleSubmit(e){
        e.preventDefault()
        console.log({username, password})
        axios.post('http://127.0.0.1:8000/app/login',
           {username, password},
            {
                withCredentials: true,
        
            }
            ).then(res=> navigate('/myfeed')).catch(err=> console.log(err))
        
    }
    return(
        <div>
            <form id="login" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br/>
                <label>Password</label>
                <input 
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;