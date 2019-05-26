import React from 'react';

class About extends React.Component {
	render() {
		return (
			<div id="about" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="section-title">
								<h2 className="title">Ми благодійний фонд Donut 4 Donate</h2>
								<p className="sub-title">Наша місія - допомагати людям. Кожного місяця ми починаємо збір для людей з різними проблемами. Цього місяця це діти-сироти.</p>
							</div>
							<div className="about-content">
								<p>Ми вам даруємо за допомогу дітям пончик. Хто не любить пончиків? Авжеж всі люблять. Тому, нумо поєднаєм приємне з корисним і допоможемо дітям.</p>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-6">
							<a href="/" className="about-video">
								<i className="play-icon fa fa-play"></i>
								<img src="./img/about.jpg" alt=""/>
						</a>
				</div>
						</div>
					</div>
				</div>
				)
			}
}

export default About;