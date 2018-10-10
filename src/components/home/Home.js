import React from 'react';

import TabSwitcher from './TabSwitcher';
import PostListing from './PostListing';
import AgendaListing from './AgendaListing';

export default class Home extends React.Component {
	render() {
		return(
			<div id="content" className="clear-both home-page">

				<TabSwitcher />

				<PostListing />

				<AgendaListing />

			</div>
		);
	}
}