import React from 'react';
import './Links.css';


const Links = (props) => (

	<div className="links">
		<div className="row">
			<div className="col-md-4">
				<p className="nav-item link"><a className="nav-item link" href="/">About</a></p>
			</div>

			<div className="col-md-4">
				<p className="nav-item link"><a className="nav-item link" href="/work">Projects</a></p>
			</div>

			<div className="col-md-4">
				<p className="nav-item link"><a className="nav-item link" href="/contact">Contact</a></p>
			</div>
		</div>
	</div>
)
export default Links;