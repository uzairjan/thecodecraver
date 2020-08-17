import React from "react";
import post4 from './../img/post-4.jpg';
import post6 from './../img/post-6.jpg';
import post1 from './../img/post-1.jpg';
import post2 from './../img/post-2.jpg';


class Mostvisited extends React.Component{
    render(){
        return(
            <React.Fragment>
                		<div className="section">
			{/*  container  */}
			<div className="container">
				{/*  row  */}
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-12">
								<div className="section-title">
									<h2>Most Read</h2>
								</div>
							</div>
							{/*  post  */}
							<div className="col-md-12">
								<div className="post post-row">
									<a className="post-img" href="blog-post.html"><img src={post4} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-2" href="category.html">JavaScript</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									</div>
								</div>
							</div>
							{/*  /post  */}

							{/*  post  */}
							<div className="col-md-12">
								<div className="post post-row">
									<a className="post-img" href="blog-post.html"><img src={post6} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-2" href="category.html">JavaScript</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									</div>
								</div>
							</div>
							{/*  /post  */}

							{/*  post  */}
							<div className="col-md-12">
								<div className="post post-row">
									<a className="post-img" href="blog-post.html"><img src={post1} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-4" href="category.html">Css</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">CSS Float: A Tutorial</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									</div>
								</div>
							</div>
							{/*  /post  */}
							
							{/*  post  */}
							<div className="col-md-12">
								<div className="post post-row">
									<a className="post-img" href="blog-post.html"><img src={post2} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-3" href="category.html">Jquery</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									</div>
								</div>
							</div>
							{/*  /post  */}
							
							<div className="col-md-12">
								<div className="section-row">
									<button className="primary-button center-block">Load More</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						{/*  ad  */}
						<div className="aside-widget text-center">
							<a href="#" style={{display: 'inline-block',margin: 'auto'}}>
								<img className="img-responsive" src="./img/ad-1.jpg" alt="" />
							</a>
						</div>
						{/*  /ad  */}
						
						{/*  catagories  */}
						<div className="aside-widget">
							<div className="section-title">
								<h2>Catagories</h2>
							</div>
							<div className="category-widget">
								<ul>
									<li><a href="#" className="cat-1">Web Design<span>340</span></a></li>
									<li><a href="#" className="cat-2">JavaScript<span>74</span></a></li>
									<li><a href="#" className="cat-4">JQuery<span>41</span></a></li>
									<li><a href="#" className="cat-3">CSS<span>35</span></a></li>
								</ul>
							</div>
						</div>
						{/*  /catagories  */}
						
						{/*  tags  */}
						<div className="aside-widget">
							<div className="tags-widget">
								<ul>
									<li><a href="#">Chrome</a></li>
									<li><a href="#">CSS</a></li>
									<li><a href="#">Tutorial</a></li>
									<li><a href="#">Backend</a></li>
									<li><a href="#">JQuery</a></li>
									<li><a href="#">Design</a></li>
									<li><a href="#">Development</a></li>
									<li><a href="#">JavaScript</a></li>
									<li><a href="#">Website</a></li>
								</ul>
							</div>
						</div>
						{/*  /tags  */}
					</div>
				</div>
				{/*  /row  */}
			</div>
			{/*  /container  */}
		</div>
            </React.Fragment>
        );
    }

}

export default Mostvisited;