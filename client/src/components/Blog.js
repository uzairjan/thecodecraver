import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { article, articles } from '../actions/index';

import post1 from './../img/post-1.jpg';
import post2 from './../img/post-2.jpg';
import post3 from './../img/post-3.jpg';
import post4 from './../img/post-4.jpg';
import post5 from './../img/post-5.jpg';
import post6 from './../img/post-6.jpg';

import widget1 from './../img/widget-1.jpg';
import widget2 from './../img/widget-2.jpg';
import widget3 from './../img/widget-3.jpg';
import widget4 from './../img/widget-4.jpg';

import author from './../img/author.png';
import avatar from './../img/avatar.png';
import postPage from './../img/post-page.jpg';

class Blog extends React.Component {
	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		const { id } = this.props.match.params;
		const { singleArticle } = this.props;
		singleArticle(id);

	}
    render(){
		const { data }  = this.props.article;
		if(!data) return <div>Loading....</div>
		console.log('inside',data);
        return(
            <React.Fragment>
                <Header />
				{
					(data) ? 
				<span>
				<div id="post-header" className="page-header" >
				<div className="background-img" style={{backgroundImage: `url(${postPage})` }}></div>
				<div className="container">
					<div className="row">
						<div className="col-md-10" >
							<div className="post-meta">
								<a className="post-category cat-2" href="category.html">JavaScript</a>
								<span className="post-date" style={{color:'black'}}>March 27, 2018</span>
							</div>
							{/* <h1 style={{color:'black'}}>Ask HN: Does Anybody Still Use JQuery?</h1> */}
						</div>
					</div>
				</div>
			</div>
                <div className="section">
					
				<div className="container">
					<div className="row">
						
					{/* <!-- Post content --> */}
					<div className="col-md-8">
						<div className="section-row sticky-container">
						<div className="main-post">
							<h3>{data[0].title}</h3>
							<div dangerouslySetInnerHTML={{ __html: data[0].body }} />
								{/* <p>{} </p> */}
							</div>
							<div className="post-shares sticky-shares">
								<a href="#" className="share-facebook"><i className="fa fa-facebook"></i></a>
								<a href="#" className="share-twitter"><i className="fa fa-twitter"></i></a>
								<a href="#" className="share-google-plus"><i className="fa fa-google-plus"></i></a>
								<a href="#" className="share-pinterest"><i className="fa fa-pinterest"></i></a>
								<a href="#" className="share-linkedin"><i className="fa fa-linkedin"></i></a>
								<a href="#"><i className="fa fa-envelope"></i></a>
							</div>
						</div>
						{/* second end rest after here */}
						<div className="section-row sticky-container">
							<a href="#" style={{display: 'inline-block',margin:'auto'}}>
								<img className="img-responsive" src={post2} alt="" />
							</a>
						</div>
						{/* Author section start here */}
						<div className="section-row">
							<div className="post-author">
								<div className="media">
									<div className="media-left">
										<img className="media-object" src={author} alt="" />
									</div>
									<div className="media-body">
										<div className="media-heading">
											<h3>John Doe</h3>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<ul className="author-social">
											<li><a href="#"><i className="fa fa-facebook"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
											<li><a href="#"><i className="fa fa-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* Author section end here */}
						
				
						{/* <!-- comments --> */}
						<div className="section-row">
							<div className="section-title">
								<h2>3 Comments</h2>
							</div>

							<div className="post-comments">
								{/* <!-- comment --> */}
								<div className="media">
									<div className="media-left">
										<img className="media-object" src={avatar} alt="" />
									</div>
									<div className="media-body">
										<div className="media-heading">
											<h4>John Doe</h4>
											<span className="time">March 27, 2018 at 8:00 am</span>
											<a href="#" className="reply">Reply</a>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

										{/* <!-- comment --> */}
										<div className="media">
											<div className="media-left">
												<img className="media-object" src={avatar} alt="" />
											</div>
											<div className="media-body">
												<div className="media-heading">
													<h4>John Doe</h4>
													<span className="time">March 27, 2018 at 8:00 am</span>
													<a href="#" className="reply">Reply</a>
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
											</div>
										</div>
										{/* <!-- /comment --> */}
									</div>
								</div>
								{/* <!-- /comment --> */}

								{/* <!-- comment --> */}
								<div className="media">
									<div className="media-left">
										<img className="media-object" src={avatar} alt="" />
									</div>
									<div className="media-body">
										<div className="media-heading">
											<h4>John Doe</h4>
											<span className="time">March 27, 2018 at 8:00 am</span>
											<a href="#" className="reply">Reply</a>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
								{/* <!-- /comment --> */}
							</div>
						</div>
						{/* <!-- /comments --> */}
												{/* <!-- reply --> */}
												<div className="section-row">
							<div className="section-title">
								<h2>Leave a reply</h2>
								<p>your email address will not be published. required fields are marked *</p>
							</div>
							<form className="post-reply">
								<div className="row">
									<div className="col-md-4">
										<div className="form-group">
											<span>Name *</span>
											<input className="input" type="text" name="name" />
										</div>
									</div>
									<div className="col-md-4">
										<div className="form-group">
											<span>Email *</span>
											<input className="input" type="email" name="email" />
										</div>
									</div>
									<div className="col-md-4">
										<div className="form-group">
											<span>Website</span>
											<input className="input" type="text" name="website" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<textarea className="input" name="message" placeholder="Message"></textarea>
										</div>
										<button className="primary-button">Submit</button>
									</div>
								</div>
							</form>
						</div>
						{/* <!-- /reply --> */}
					</div>
					<div className="col-md-4">
						{/* <!-- ad --> */}
						<div className="aside-widget text-center">
							<a href="#" style={{display: 'inline-block',margin:'auto'}}>
								<img className="img-responsive" src="./img/ad-1.jpg" alt="" />
							</a>
						</div>
						{/* <!-- /ad --> */}

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
										<a className="post-category cat-3" href="#">Jquery</a>
										<span className="post-date">March 27, 2018</span>
									</div>
									<h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
								</div>
							</div>

							<div className="post post-thumb">
								<a className="post-img" href="blog-post.html"><img src={post1} alt="" /></a>
								<div className="post-body">
									<div className="post-meta">
										<a className="post-category cat-2" href="#">JavaScript</a>
										<span className="post-date">March 27, 2018</span>
									</div>
									<h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
								</div>
							</div>
						</div>
						{/* <!-- /post widget --> */}
						
						{/* <!-- catagories --> */}
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
						{/* <!-- /catagories --> */}
						
						{/* <!-- tags --> */}
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
						{/* <!-- /tags --> */}
						
						{/* <!-- archive --> */}
						<div className="aside-widget">
							<div className="section-title">
								<h2>Archive</h2>
							</div>
							<div className="archive-widget">
								<ul>
									<li><a href="#">January 2018</a></li>
									<li><a href="#">Febuary 2018</a></li>
									<li><a href="#">March 2018</a></li>
								</ul>
							</div>
						</div>
						{/* <!-- /archive --> */}
					</div>
					{/* <!-- /aside --> */}
					</div>
				</div>
				</div>
			</span>
			: 'No article found'
			}
			{/* <!-- container --> */}
			
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        article: state
    }
};

const mapDispatchToProps  = dispatch => ({
	singleArticle: (id)=> dispatch(article(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Blog);