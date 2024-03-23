export default function Card({image, postTitle, description}){
    return(
        <div id="main">
			<div class="inner">
				<section class="tiles">
					<article class="style1">
						<span class="image">
							<img src={`src/images/${image}`} alt="" />
						</span>
						<a href="tops.html">
							<h2>{postTitle}</h2>
							<div class="content">
								<p>{description}</p>
							</div>
						</a>
					</article>
								
				</section>
			</div>
		</div>
        
    )
}