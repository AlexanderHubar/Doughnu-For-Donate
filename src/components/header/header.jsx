import React from 'react';
import { Link } from 'react-router-dom';

import DateCountdown from 'react-date-countdown-timer';
import './header.css';
const images = {
	logo: require('../../assets/img/donut4donateSmal.png')
}


class Header extends React.Component {

	constructor (props) {
		super(props);

		let day = 86400;
		let daysLeft = Date.now() + day * 30;
		const Left = daysLeft - Date.now();
		console.log(Left)

		this.state = {
			timeLeft: Left
		}

		console.log(Date.now())
		
	}

	render() {
		return (
			<header id="home">
				<nav id="main-navbar">
					<div className="container container_main-navbar">
						<div className="navbar-header">
							<div className="navbar-brand">
								<Link className="logo" to="/"><img src={images.logo} alt="logo" /></Link>
							</div>
							<button className="navbar-toggle-btn">
								<i className="fa fa-bars"></i>
							</button>
							<button className="search-toggle-btn">
								<i className="fa fa-search"></i>
							</button>
						</div>
						<ul className="navbar-menu nav navbar-nav navbar-right">
							<li><Link to="/">Головна</Link></li>
							<li><Link to="/volunteers">Наші волонтери</Link></li>
							<li><Link to="/contact">Про нас</Link></li>
						</ul>
					</div>
				</nav>
				<div id="home-owl" className="owl-carousel owl-theme">
					<div className="home-item">
						<div className="section-bg slide1"></div>
						<div className="home">
							<div className="container">
								<div className="row">
									<div className="col-md-8">
										<div className="home-content">
											<h1>Допоможи дітям сирітам цього місяця!</h1>
											<p className="time-left">Залишилось </p>
											<DateCountdown dateTo='May 26, 2019 11:00:00 GMT+02:00'/>
											{/* <DateCountdown dateTo='June 24, 2019 00:00:00 GMT+01:00'/> */}
											<Link to="/form" className="primary-button">Допомогти</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;