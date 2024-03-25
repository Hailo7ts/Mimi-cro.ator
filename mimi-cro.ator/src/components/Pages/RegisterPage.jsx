import React, {useState} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function RegisterPage(){
    const[username, setUsername] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5173/register', {username, password})
        .then(res => {console.log(res)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="register-container">
            <form className="register" 
            action=""
            onSubmit={handleSubmit}
            >
                <h1 className="registerTitle">Register</h1>
               
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
                <span>Already have a login?</span>
                <Link to="/LoginPage">
                    <button>Login</button>
                </Link>
            </div>
        </div>
        
        
    )
}