import React from "react";
import logo from './../img/logo.png';


class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
               <footer id="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="footer-widget">
							<div className="footer-logo">
								<a href="index.html" className="logo"><img src={logo} alt="" /></a>
							</div>
							<ul className="footer-nav">
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Advertisement</a></li>
							</ul>
							<div className="footer-copyright">
								<span>&copy; 
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </span>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row">
							<div className="col-md-6">
								<div className="footer-widget">
									<h3 className="footer-title">About Us</h3>
									<ul className="footer-links">
										<li><a href="about.html">About Us</a></li>
										<li><a href="#">Join Us</a></li>
										<li><a href="contact.html">Contacts</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-6">
								<div className="footer-widget">
									<h3 className="footer-title">Catagories</h3>
									<ul className="footer-links">
										<li><a href="category.html">Web Design</a></li>
										<li><a href="category.html">JavaScript</a></li>
										<li><a href="category.html">Css</a></li>
										<li><a href="category.html">Jquery</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="footer-widget">
							<h3 className="footer-title">Join our Newsletter</h3>
							<div className="footer-newsletter">
								<form>
									<input className="input" type="email" name="newsletter" placeholder="Enter your email" />
									<button className="newsletter-btn"><i className="fa fa-paper-plane"></i></button>
								</form>
							</div>
							<ul className="footer-social">
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</footer>
            </React.Fragment>
        );
    }
}

export default Footer;