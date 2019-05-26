import React from 'react';
import User1 from '../../assets/img/user1.png';
import User2 from '../../assets/img/user2.png';
import User3 from '../../assets/img/3.jpg';
import User4 from '../../assets/img/user4.png';
import User5 from '../../assets/img/user5.png';
import User6 from '../../assets/img/user6.png';
import User7 from '../../assets/img/user7.png';
import User8 from '../../assets/img/user8.png';
import User9 from '../../assets/img/user9.png';

import './volunteers.css'

class Volunteers extends React.Component {
	render() {
		return (
			<div id="numbers" className="section volunteers">
				<div className="container">
					<div className="col-md-8 col-md-offset-2">
						<div className="section-title text-center">
							<h2 className="title">Нам допомогли</h2>
							<p className="sub-title">Хочеш попасти до нас в галерею? Відмічай нас в соцмережах з хештегом <br /><span className="bold">#donut<span className="green">4</span>donate</span></p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
								<img src={User1} alt="User 1" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
								<img src={User2} alt="User 2" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
								<img src={User3} alt="User 3" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
							<img src={User4} alt="User 4" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
							<img src={User5} alt="User 5" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
							<img src={User6} alt="User 6" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
							<img src={User7} alt="User 7" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
							<img src={User8} alt="User 8" />
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="number volunteer">
							<img src={User9} alt="User 9" />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Volunteers;