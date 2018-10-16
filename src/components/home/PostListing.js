import React from 'react'

import TabSwitcher from './TabSwitcher'
import SingleArticle from './SingleArticle'

const PostListing = (props) => (
	<div id="posts-wrap" className="size-medium">
		<div className="single-page-of-posts">
			{ props.posts.map((post, i) => (
				<SingleArticle
					key={i}
					link={post.link}
					title={post.title.rendered}
					excerpt={post.excerpt.rendered}
				/>
			)) }
		</div>
		<div id="load-more-wrap">
			 <button id="fetch-older-posts-button">Načíst starší</button>
		</div>
	</div>
)

export default PostListing