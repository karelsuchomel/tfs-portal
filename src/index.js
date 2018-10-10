import React from 'react';
import ReactDOM from 'react-dom';

import './index.sass';

class App extends React.Component {
	render() {
		return(
			<h1>Some text here!</h1>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);