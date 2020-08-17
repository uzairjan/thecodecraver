import React from 'react';

import Blog from './Blog';

import post1 from './../img/post-1.jpg';
import post2 from './../img/post-2.jpg';
import post3 from './../img/post-3.jpg';
import post4 from './../img/post-4.jpg';
import post5 from './../img/post-5.jpg';
import post6 from './../img/post-6.jpg';
import {Link} from 'react-router-dom';
import widget1 from './../img/widget-1.jpg';
import widget2 from './../img/widget-2.jpg';
import widget3 from './../img/widget-3.jpg';
import widget4 from './../img/widget-4.jpg';

class Recents extends React.Component {
    render(){
        return(
            <React.Fragment>
                 <div className="section">
			<div className="container">
				<div className="row">	
					<div className="col-md-6">
						<div className="post post-thumb">
							{/* <Link to={Blog}></Link> */}
							<a className="post-img" href="blog-post.html"><img src={post1} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-2" href="category.html">JavaScript</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title">
									<Link to="/blog">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</Link>
									<a href="blog-post.html"></a>
									</h3>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="post post-thumb">
							<a className="post-img" href="blog-post.html"><img src={post2} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-3" href="category.html">Jquery</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h2>Recent Posts</h2>
						</div>
					</div>

					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src={post3} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-1" href="category.html">Web Design</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src={post4} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-2" href="category.html">JavaScript</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src={post5} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-3" href="category.html">Jquery</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
							</div>
						</div>
					</div>

					<div className="clearfix visible-md visible-lg"></div>

					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src={post6} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-2" href="category.html">JavaScript</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src={post1} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-4" href="category.html">Css</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">CSS Float: A Tutorial</a></h3>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src={post2} alt="" /></a>
							<div className="post-body">
								<div className="post-meta">
									<a className="post-category cat-1" href="category.html">Web Design</a>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-8">
						<div className="row">
							{/* <!-- post --> */}
							<div className="col-md-12">
								<div className="post post-thumb">
									<a className="post-img" href="blog-post.html"><img src={post2} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-3" href="category.html">Jquery</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
									</div>
								</div>
							</div>
							{/* <!-- /post --> */}

							{/* <!-- post --> */}
							<div className="col-md-6">
								<div className="post">
									<a className="post-img" href="blog-post.html"><img src={post1} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-4" href="category.html">Css</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">CSS Float: A Tutorial</a></h3>
									</div>
								</div>
							</div>
							{/* <!-- /post --> */}

							{/* <!-- post --> */}
							<div className="col-md-6">
								<div className="post">
									<a className="post-img" href="blog-post.html"><img src={post2} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-1" href="category.html">Web Design</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
									</div>
								</div>
							</div>
							{/* <!-- /post --> */}

							<div className="clearfix visible-md visible-lg"></div>

							{/* <!-- post --> */}
							<div className="col-md-6">
								<div className="post">
									<a className="post-img" href="blog-post.html"><img src={post4} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-2" href="category.html">JavaScript</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
									</div>
								</div>
							</div>
							{/* <!-- /post --> */}

							{/* <!-- post --> */}
							<div className="col-md-6">
								<div className="post">
									<a className="post-img" href="blog-post.html"><img src={post5} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-3" href="category.html">Jquery</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
									</div>
								</div>
							</div>
							{/* <!-- /post --> */}

							<div className="clearfix visible-md visible-lg"></div>

							{/* <!-- post --> */}
							<div className="col-md-6">
								<div className="post">
									<a className="post-img" href="blog-post.html"><img src={post3} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-1" href="category.html">Web Design</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
									</div>
								</div>
							</div>
							{/* <!-- /post --> */}

							{/* <!-- post --> */}
							<div className="col-md-6">
								<div className="post">
									<a className="post-img" href="blog-post.html"><img src={post4} alt="" /></a>
									<div className="post-body">
										<div className="post-meta">
											<a className="post-category cat-2" href="category.html">JavaScript</a>
											<span className="post-date">March 27, 2018</span>
										</div>
										<h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
									</div>
								</div>
							</div>
							{/* <!-- /post --> */}
						</div>
					</div>

					<div className="col-md-4">
						{/* <!-- post widget --> */}
						<div className="aside-widget">
							<div className="section-title">
								<h2>Most Read</h2>
							</div>

							<div className="post post-widget">
								<a className="post-img" href="blog-post.html"><img src={widget1} alt="" /></a>
								<div className="post-body">
									<h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
								</div>
							</div>

							<div className="post post-widget">
								<a className="post-img" href="blog-post.html"><img src={widget2} alt="" /></a>
								<div className="post-body">
									<h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
								</div>
							</div>

							<div className="post post-widget">
								<a className="post-img" href="blog-post.html"><img src={widget3} alt="" /></a>
								<div className="post-body">
									<h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
								</div>
							</div>

							<div className="post post-widget">
								<a className="post-img" href="blog-post.html"><img src={widget4} alt="" /></a>
								<div className="post-body">
									<h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
								</div>
							</div>
						</div>
						{/* <!-- /post widget --> */}

						{/* <!-- post widget --> */}
						<div className="aside-widget">
							<div className="section-title">
								<h2>Featured Posts</h2>
							</div>
							<div className="post post-thumb">
								<a className="post-img" href="blog-post.html"><img src={post2} alt="" /></a>
								<div className="post-body">
									<div className="post-meta">
										<a className="post-category cat-3" href="category.html">Jquery</a>
										<span className="post-date">March 27, 2018</span>
									</div>
									<h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
								</div>
							</div>

							<div className="post post-thumb">
								<a className="post-img" href="blog-post.html"><img src={post1} alt="" /></a>
								<div className="post-body">
									<div className="post-meta">
										<a className="post-category cat-2" href="category.html">JavaScript</a>
										<span className="post-date">March 27, 2018</span>
									</div>
									<h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
								</div>
							</div>
						</div>
						{/* <!-- /post widget --> */}
						
						{/* <!-- ad --> */}
						<div className="aside-widget text-center">
							<a href="#" style={{display: 'inline-block',margin: 'auto'}}>
								<img className="img-responsive" src={post1} alt="" />
							</a>
						</div>
						{/* <!-- /ad --> */}
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
            </React.Fragment>
        );
    }
}

export default Recents;