import React from 'react';

import SiteIdentity from './SiteIdentity';
import Search from './Search';
import MenuItems from './MenuItems';

export default class NavigationTopBar extends React.Component {
	render() {
		return(
			<nav id="top-bar-container">
				<input name="toggle-menu" id="toggle-menu-checkbox" type="checkbox" />
				<div id="top-bar-menu-container" className="clear-both">
					<label htmlFor="toggle-menu-checkbox" className="icon-hamburger-menu">
						<div className="menu-icon-container">
							<div id="hamburger-line-1" className="line"></div>
							<div id="hamburger-line-2" className="line"></div>
							<div id="hamburger-line-3" className="line"></div>
						</div>
						<span>Navigace</span>
					</label>

					<SiteIdentity />

					<input id="search-box-toggle" type="checkbox" />
					<Search />

					<MenuItems />
					
				</div>
			</nav>
		);
	}
}

