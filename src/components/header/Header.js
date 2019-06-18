import React from 'react';

import HamburgerMenuButton from './HamburgerMenuButton.js'
import SiteIdentity from './SiteIdentity.js';
import Search from './Search.js';
import QuickLinksNavigation from './QuickLinksNavigation.js';
import UserNavigation from './UserNavigation.js'

export default class NavigationTopBar extends React.Component {
	render() {
		return(
			<header>
				<div id="top-bar-wrapper">
					<nav>
						<HamburgerMenuButton />
						
						<SiteIdentity />
					</nav>
					<nav>
						<QuickLinksNavigation />
						
						<Search />
					</nav>
				</div>
			</header>
		);
	}
}

