import React from 'react';
import Header from './Header';

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

import author from './../img/author.png';
import avatar from './../img/avatar.png';


class Blog extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					{/* <!-- Post content --> */}
					<div className="col-md-8">
						<div className="section-row sticky-container">
							<div className="main-post">
								<h3>Lorem Ipsum: when, and when not to use it</h3>
								<p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be filled with real words, with thoughts that count, information that has value. </p>
								<p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
								<figure className="figure-img">
									<img className="img-responsive" src={post4} alt="" />
									<figcaption>So Lorem Ipsum is bad (not necessarily)</figcaption>
								</figure>
								<p>You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it, not always in the preferred order. Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy, no less.</p>
								<p>There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.</p>
								<p>One of the villagers, Kristina Halvorson from Adaptive Path, holds steadfastly to the notion that design can’t be tested without real content:</p>
								<blockquote className="blockquote">
									I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. What kills me here is that we’re talking about creating a user experience that will (whether we like it or not) be DRIVEN by words. The entire structure of the page or app flow is FOR THE WORDS.
								</blockquote>
								<p>If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</p>
								<h3>Summing up, if the copy is diverting attention from the design it’s because it’s not up to task.</h3>
								<p>Typographers of yore didn't come up with the concept of dummy copy because people thought that content is inconsequential window dressing, only there to be used by designers who can’t be bothered to read. Lorem Ipsum is needed because words matter, a lot. Just fill up a page with draft copy about the client’s business and they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong way and draft copy can derail your design review.</p>
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

						{/* <!-- ad --> */}
						<div className="section-row text-center">
							<a href="#" style={{display: 'inline-block',margin:'auto'}}>
								<img className="img-responsive" src={post2} alt="" />
							</a>
						</div>
						{/* <!-- ad --> */}
						
						{/* <!-- author --> */}
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
						{/* <!-- /author --> */}

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
					{/* <!-- /Post content --> */}

					{/* <!-- aside --> */}
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
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
            </React.Fragment>
        );
    }
}

export default Blog;