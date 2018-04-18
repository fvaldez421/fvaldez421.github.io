import React, { Component } from 'react';
import './Header.css';


class Header extends Component {


	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="row">
					<div className="col-md-10 mid">
						<nav className="navbar navbar-expand header">
							<h1>Frank Valdez</h1>	
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item"><a className="nav-link" href="/">GitHub</a></li>
									<li className="nav-item"><a className="nav-link" href="/work">LinkedIn</a></li>
									<li className="nav-item"><a className="nav-link" href="/contact">Email</a></li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		)
	}

}
export default Header;