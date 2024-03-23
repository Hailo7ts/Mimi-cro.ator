import {Link} from 'react-router-dom'

export default function Card({image, postTitle, description}){
    return(
        <div id="main">
			<div class="inner">
				<section class="tiles">
					<article class="style1">
						<span class="image">
							<img src={`src/images/${image}`} alt="" />
						</span>
						<Link to={`/${postTitle}`}>
							<h2>{postTitle}</h2>
							<div class="content">
								<p>{description}</p>
							</div>
						</Link>
					</article>
								
				</section>
			</div>
		</div>
        
    )
}