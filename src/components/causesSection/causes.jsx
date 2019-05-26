import React from 'react';

class Causes extends React.Component {
	render() {
		return (
			<div id="causes" className="section">
				<div className="container">
					<div className="row">

						<div className="col-md-8 col-md-offset-2">
							<div className="section-title text-center">
								<h2 className="title">Ми допомагаєм</h2>
								<p className="sub-title">Цього місяця ми збираємо кошти для дітей-сиріт</p>
							</div>
						</div>
						<div className="col-md-4">
							
						</div>
						<div className="col-md-4">
							<div className="causes">
								<div className="causes-img">
									<a href="single-cause.html">
										<img src="./img/post-1.jpg" alt="" />
									</a>
								</div>
								<div className="causes-progress">
									<div className="causes-progress-bar">
										<div style={{width: '10%'}}>
											<span>10%</span>
										</div>
									</div>
									<div>
										<span className="causes-raised">Зібрано: <strong>10 000₴</strong></span>
										<span className="causes-goal">Ціль: <strong>100 000₴</strong></span>
									</div>
								</div>
								<div className="causes-content">
									<h3><a href="single-cause.html">Possit nostro aeterno eu vis, ut cum quem reque</a></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<a href="single-cause.html" className="primary-button causes-donate">Donate Now</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Causes;