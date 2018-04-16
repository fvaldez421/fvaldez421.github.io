import React, { Component } from 'react';
import './Header.css';


class Header extends Component {


	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container mid">
					<nav className="navbar navbar-expand">
						<h1>About</h1>	
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item"><a className="nav-link" href="/">About</a></li>
								<li className="nav-item"><a className="nav-link" href="/work">Projects</a></li>
								<li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		)
	}

}
export default Header;