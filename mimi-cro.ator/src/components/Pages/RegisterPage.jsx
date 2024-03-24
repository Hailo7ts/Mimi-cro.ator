import React, {useState} from "react"

export default function RegisterPage(){
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    async function register(event){
        event.preventDefault()
        await fetch('http://localhost:5173/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        })
    }

    return(
        <form className="register" action="" onSubmit={register}>
            <h1 className="registerTitle">Register</h1>
               
            <input type="text" 
            placeholder="username" 
            value={username} 
            onChange={event=> setUsername(event.target.value)}/>
                
            <input type="password" 
            placeholder="password" 
            value={password} 
            onChange={event=> setPassword(event.target.value)} />
            <button>Register</button>
        </form>
        
    )
}