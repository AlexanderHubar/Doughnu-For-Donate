import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	render () {
		return (
			<footer id="footer" className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="footer">
						
						<p> Разом ми змінюємо світ і створюємо можливості. Можливість об'єднати багатьох людей навколо проблем, які ми здатні вирішити спільно. Можливість допомогти тим, хто потребує допомоги. </p>
						<ul className="footer-contact">
							<li><i className="fa fa-map-marker"></i> місто Черкаси, Україна</li>
							<li><i className="fa fa-phone"></i> 607-279-9246</li>
							<li><i className="fa fa-envelope"></i> <a href="/">donut4donate@gmail.com</a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-4">
					
				</div>
				<div className="col-md-4">
						<div className="footer-logo">
							<Link className="logo" to="/"><img src="./img/donut4donate.png" alt="" /></Link>
						</div>
				</div>
			</div>
			<div id="footer-bottom" className="row">
				<div className="col-md-6 col-md-push-6">
					<ul className="footer-nav">
						<li><Link to="/">Головна</Link></li>
						<li><Link to="/volunteers">Наші волонтери</Link></li>
						<li><Link to="/about">Про нас</Link></li>
					</ul>
				</div>
				<div className="col-md-6 col-md-pull-6">
					<div className="footer-copyright">
						<span>
Copyright &copy; 2019 All rights reserved | Created with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://alexanderhubar.github.io/CVSite" rel="noopener noreferrer" target="_blank">Oleksandr Hubar</a>
					</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
		)
	}
}

export default Footer;