import React from 'react';

import {withRouter} from 'react-router-dom';

import Spinner from './spinner';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles-compiled.css';
import './card.css';

class Card extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			number: 0,
			name: '',
			expiry: '',
			cvc: 0,
			focused: 'name',
			isSpinner: false
		}
	}

	spin = () => {
		this.setState({
			isSpinner: !this.state.isSpinner
		})
		setTimeout(() => {
			this.setState({
				isSpinner: !this.state.isSpinner
			})
			this.props.history.push({
				pathname: '/',
  			state: { popup: true }
			});
			this.props.togglePopup();
		}, 2000)
	}

	handleChange = (e) => {
		let name = e.target.name;
		this.setState({
			[name]: e.target.value
		})
	};

	render() {

		return (
			<div className="bg-contact3">
				<div className="container-contact3">
					<div className="wrap-contact3">
						{	this.state.isSpinner 	&& <Spinner />

						}
						<form className="contact3-form validate-form">
							<span className="contact3-form-title">
								Donate
					</span>

							<Cards
								number={this.state.number}
								name={this.state.name}
								expiry={this.state.expiry}
								cvc={this.state.cvc}
								focused={this.state.focused}
							/>

							<div className="wrap-input3 validate-input" data-validate="Name is required">
								<input
									className="input3"
									type="text"
									name="number"
									placeholder="Card Number"
									onChange={this.handleChange}
								/>
								<span className="focus-input3"></span>
							</div>

							<div className="wrap-input3 validate-input" data-validate="Valid email is required: ex@abc.xyz">
								<input
									className="input3"
									type="text"
									name="name"
									placeholder="Name"
									onChange={this.handleChange}
								/>
								<span className="focus-input3"></span>
							</div>

							<div className="wrap-input3 validate-input" data-validate="Valid email is required: ex@abc.xyz">
								<input
									className="input3"
									type="text"
									name="expiry"
									placeholder="Valid Thru"
									onChange={this.handleChange}
								/>
								<span className="focus-input3"></span>
							</div>

							<div className="wrap-input3 validate-input" data-validate="Valid email is required: ex@abc.xyz">
								<input
									className="input3"
									type="pass"
									name="cvc"
									placeholder="CVC"
									onChange={this.handleChange}
								/>
								<span className="focus-input3"></span>
							</div>


							<div className="container-contact3-form-btn">
								<a 
									className="contact3-form-btn"
									onClick={this.spin}
								>
									Оплатити
						</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Card);