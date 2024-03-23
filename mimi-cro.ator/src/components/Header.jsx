import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header id="header">
			<div class="inner">

					<Link to="/" class="logo">
						<span class="symbol"><img src="src\images\mimi's-corner-logo.png" alt="" /></span><span class="title">Mimi-cro.ator</span>
					</Link>

                
					<nav>
						<ul>
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/register">Register</Link></li>
							<li><Link to="#menu">Menu</Link></li>
						</ul>
					</nav>

			</div>
		</header>
    )
}