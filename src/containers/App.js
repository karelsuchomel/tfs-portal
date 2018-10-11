import React from 'react';
import { Route } from 'react-router-dom';

import NavigationTopBar from '../components/navigation-top-bar/NavigationTopBar.js';
import NavigationSideBar from '../components/navigation-side-bar/NavigationSideBar.js';
import Home from '../components/home/Home.js';

export default class App extends React.Component {
	render() {
		return(
			<div className="app-wrapper">

				<input name="toggle-menu" id="toggle-menu-checkbox" type="checkbox" />
				<NavigationTopBar />

				<div id="content-wrap" className="clear-both">

					<div id="side-panel-bg-fix"></div>
					<NavigationSideBar />
					<div id="side-list-fixed-background-mobile"></div>
					<div id="dimmer-content"></div>

					<Route exact path="/" component={ Home } />
					
				</div>

			</div>
		);
	}
}