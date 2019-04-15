import React from 'react';

import MobileNavigationButton from './MobileNavigationButton.js'
import SiteIdentity from './SiteIdentity.js';
import Search from './Search.js';
import QuickLinksNavigation from './QuickLinksNavigation.js';
import UserNavigation from './UserNavigation.js'

export default class NavigationTopBar extends React.Component {
	render() {
		return(
			<nav id="header">
				<div id="top-bar-wrapper" className="clear-both">
					
					<MobileNavigationButton />

					<SiteIdentity />

					<Search />

					<QuickLinksNavigation />

					<UserNavigation />
					
				</div>
			</nav>
		);
	}
}

