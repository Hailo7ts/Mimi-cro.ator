import React, {useState} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
    const[username, setUsername] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/login', {username, password})
        .then(res => {
            console.log(res)
            if(res.data === "success"){
                navigate('/home')
            }
        })
        .cath(err => console.log(err))
    }

    return(
        <div className="register-container">
            <form className="register" 
            action=""
            onSubmit={handleSubmit}
            >
                <h1 className="registerTitle">Login</h1>
               
                <input type="text" 
                placeholder="username" 
                onChange={event=> setUsername(event.target.value)}
                />
                
                <input type="password" 
                placeholder="password" 
                onChange={event=> setPassword(event.target.value)}
                />
                <button>submit</button>
            </form>

            <div>
                <span>Don't have an account?</span>
                <Link to="/register">
                    <button>Sign up</button>
                </Link>
            </div>
        </div>
    )
}