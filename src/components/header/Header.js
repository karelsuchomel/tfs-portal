import React from 'react';

import SiteIdentity from './SiteIdentity.js';
import Search from './Search.js';
import FocusedLinks from './FocusedLinks.js';
import UserNavigation from './UserNavigation.js'

export default class NavigationTopBar extends React.Component {
	render() {
		return(
			<nav id="header">
				<input name="toggle-menu" id="toggle-menu-checkbox" type="checkbox" />
				<div id="top-bar-wrapper" className="clear-both">
					<label htmlFor="toggle-menu-checkbox" className="icon-hamburger-menu">
						<div className="menu-icon-container">
							<div id="hamburger-line-1" className="line"></div>
							<div id="hamburger-line-2" className="line"></div>
							<div id="hamburger-line-3" className="line"></div>
						</div>
						<span>Navigace</span>
					</label>

					<SiteIdentity />

					<Search />

					<FocusedLinks />

					<UserNavigation />
					
				</div>
			</nav>
		);
	}
}

