import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Links from "./components/Links";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App background">

					<div className="row header">
						<Header />
						<Links />
					</div>

					<div className="row">
						<div className="col-md-12 body mid">
							<Route exact path="/" component={ About } />
							<Route exact path="/work" component={ Work } />
							<Route exact path="/contact" component={ Contact } />
						</div>					
					</div>

				</div>



			</Router>
		);
	}
}

export default App;
