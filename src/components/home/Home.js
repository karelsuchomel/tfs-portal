import React from 'react';

import HeroCard from './hero-card/HeroCard.js';
import TabSwitcher from './TabSwitcher';
import PostListing from './PostListing';
import AgendaListing from './AgendaListing';

const Home = (props) => {
	const isEmpty = props.posts === []

	return(
		<div>
			<HeroCard />

			<div id="content" className="clear-both home-page">

				<TabSwitcher />

				{isEmpty
					? (props.isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
					: <PostListing 
							posts={props.posts} 
							isFetching={props.isFetching}
						/>
				}

				<AgendaListing />

			</div>
		</div>
	)
}

export default Home
