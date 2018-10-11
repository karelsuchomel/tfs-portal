import React from 'react';

import HeroCard from './hero-card/HeroCard.js';
import TabSwitcher from './TabSwitcher';
import PostListing from './PostListing';
import AgendaListing from './AgendaListing';

export default class Home extends React.Component {
	render() {
		return(
			<div>
				<HeroCard />

				<div id="content" className="clear-both home-page">

					<TabSwitcher />

					<PostListing />

					<AgendaListing />

				</div>
			</div>
		);
	}
}