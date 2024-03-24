export default function LoginPage(){
    return(
        <div>
            <h1 className="loginTitle">Login</h1>

            <form className="login" action="">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
            </form>
        </div>
    )
}