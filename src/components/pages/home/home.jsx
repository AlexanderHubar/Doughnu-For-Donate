import React from 'react';
import About from '../../aboutSection/about';
import Numbers from '../../numbers/numbers';
import Causes from '../../causesSection/causes';
import Cta from '../../cta/cta';


class Home extends React.Component {
	render() {
		return (
			<div>
				<About />
				<Numbers />
				<Causes />
				<Cta />
			</div>
		)
	}
}

export default Home;