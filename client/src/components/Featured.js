import React from 'react';


class Featured extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="section section-grey">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-12">
						<div className="section-title text-center">
							<h2>Featured Posts</h2>
						</div>
					</div>

					{/* <!-- post --> */}
					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src="./img/post-4.jpg" alt="" /></a>
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
					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src="./img/post-5.jpg" alt="" /></a>
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
					<div className="col-md-4">
						<div className="post">
							<a className="post-img" href="blog-post.html"><img src="./img/post-3.jpg" alt="" /></a>
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
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
            </React.Fragment>
        );
    }
}


export default Featured;