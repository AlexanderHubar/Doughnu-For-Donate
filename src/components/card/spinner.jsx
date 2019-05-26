import React from 'react';
import Loading from '../../assets/img/loading.gif';
import './spinner.css';

class Spinner extends React.Component {
	render () {
		return (
			<div className="spinner">
				<img src={Loading} alt="Spinner"/>
			</div>
		)
	}
}

export default Spinner;