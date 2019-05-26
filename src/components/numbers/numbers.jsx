import React from 'react';

class Numbers extends React.Component {
	render () {
		return (
			<div id="numbers" className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<div className="number">
						<i className="fa fa-smile-o"></i>
						<h3>47k</h3>
						<span>Допомогли</span>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="number">
						<i className="fa fa-heartbeat"></i>
						<h3>154K</h3>
						<span>Людям допоможено</span>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="number">
						<i className="fa fa-money"></i>
						<h3>785K</h3>
						<span>Зібрано</span>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="number">
						<i className="fa fa-handshake-o"></i>
						<h3>357</h3>
						<span>Волонтерів</span>
					</div>
				</div>
			</div>
		</div>
	</div>
		)
	}
}

export default Numbers;