import React from 'react'; 

class Cta extends React.Component {
	render () {
		return (
			<div id="cta" className="section">
		<div className="section-bg cta" data-stellar-background-ratio="0.5"></div>
		
		<div className="container">
			<div className="row">
				<div className="col-md-offset-2 col-md-8">
					<div className="cta-content text-center">
						<h1>Стати волонтером</h1>
						<p className="lead">Кожен хто пожертвував гроші на благодійність може стати волонтером та допомагати нам.</p>
						<a href="/" className="primary-button">Приєднуйся до Нас!</a>
					</div>
				</div>
			</div>
		</div>
	</div>
		)
	}
}

export default Cta; 