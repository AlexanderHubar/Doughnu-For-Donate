import React from 'react';
import { Link } from 'react-router-dom';


class Form extends React.Component {
	render() {
		return (
			<div className="bg-contact3">
		<div className="container-contact3">
			<div className="wrap-contact3">
			<form className="contact3-form validate-form">
					<span className="contact3-form-title">
						Donate
					</span>

					<div className="wrap-input3 validate-input" data-validate="Name is required">
						<input className="input3" type="text" name="name" placeholder="Ім'я Прізвище"/>
						<span className="focus-input3"></span>
					</div>

					<div className="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input3" type="text" name="email" placeholder="Емейл" />
						<span className="focus-input3"></span>
					</div>

					<div className="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input3" type="text" name="text" placeholder="Ваше розташуваня" />
						<span className="focus-input3"></span>
					</div>

					<div className="wrap-input3 validate-input" data-validate = "Message is required">
						<textarea className="input3" name="message" placeholder="Ваші побажання"></textarea>
						<span className="focus-input3"></span>
					</div>

					<div className="container-contact3-form-btn">
						<Link to="/card" className="contact3-form-btn">
							Далі
						</Link>
					</div>
				</form>
				</div>
		</div>
	</div>
		)
	}
}

export default Form;