import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

export const Footer = () => (
	<footer className="footer mt-auto py-3 d-flex ">
		<div className="footerlinks">

			<div className="footerlink"><p>Home</p></div>
			<div className="footerlink"><p>Contact us</p></div>
			<div className="footerlink"><p>Login</p></div>
			<div className="footerlink"><p>About</p></div>
			<div className="footerlink"><p>Privacy Policy</p></div>
			<div className="footerlink"><p>Terms</p></div>
		</div>
		
			<div className="input-group md-form form-sm form-2 pl-0 me-5">
				<div className="">
					<p className="m-0 p-0 text-white textfoot">Stay in the know - join Elana!</p>

					<div className="d-flex">

						<input className="form-control my-0 py-1 red-border ms-2" type="text" placeholder="Enter your email" aria-label="Search" />
						<div className="input-group-append">
							<span className="" id="basic-text1">
								<button className='buttonfooter me-5'>
									Join
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<div className="m-0 p-0">
					<p className="text-white p-0 m-0">Conect with us</p>

					<div className="icon d-flex">
						<div className="me-3"><i className="fab fa-facebook-square"></i></div>
						<div className="me-3"><i className="fab fa-linkedin"></i></div>
						<div className="me-3"><i className="fab fa-pinterest"></i></div>
						<div className="me-3"><i className="fab fa-instagram"></i></div>
					</div>
				</div>
			</div>
	</footer>
)