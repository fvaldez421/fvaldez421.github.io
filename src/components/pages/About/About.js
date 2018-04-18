import React from 'react';
import './About.css';
import proImg from "../../images/frank.jpg";


const About = (props) => (
	<div className="About">
		<div className="row">
			<div className="col-md-4">
				<div className="row">
					<div className="col-md-12 shadow noPad">
						<img className="img-responsive" src={proImg} alt="IMG">
						</img>
					</div>
				</div>
			</div>

			<div className="col-md-8">
				<div className="row">
					<div className="col-md-12 shadow">
						<p>
							Hello, I am a first-year Full-Stack JavaScript Web Developer with an extensive 
							background in system diagnostics, troubleshooting and repair on Heavy Equipment 
							and Diesel Engines. While my time coding may be short, my experience troubleshooting
							complex interrelated systems, has been extremely beneficial to my understaning 
							and learning curve. During the course of my class, I grew from creating and 
							manipulating static HTML pages to developing full stack ReactJs CRUD applications.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)
export default About;