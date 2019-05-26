import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/pages/home/home';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Card from './components/card/card';
import Volunteers from './components/volunteers/volunteers';

class App extends Component {
	constructor() {
		super();

		this.state = {
			isPopup: false
		}
	}

	togglePopup = () => {
		this.setState({
			isPopup: !this.state.isPopup
		})
	}


  render () { 
		return (
			<div className="App">
				<Header />
				{ this.state.isPopup && <div className="popup-wrapper">
					<div className="popup">
							<header>
								<h3>Дякуємо!</h3>
							</header>
							<p>Дякуємо, за Вашу допомогу. Пончик буде надіслано на вказану адресу за лічені дні. Не забудьте розповісти про нас друзям.</p>
							<button className="popup-button" onClick={this.togglePopup}>Добре</button>
							<div></div>
						</div>
					</div>
				}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/volunteers" component={Volunteers}/>
					<Route exact path="/form" component={Form}/>
					<Route exact path="/card" render={props => <Card {...props} togglePopup={this.togglePopup}/>} />
				</Switch>
				<Footer />
			</div>
			  
		);
	}
}

export default App;
