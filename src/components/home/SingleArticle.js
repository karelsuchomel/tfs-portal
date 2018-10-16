import React from 'react'
import { Link } from 'react-router-dom'

const SingleArticle = (props) => (
	<article className="post-wrap clear-both">
		<a 
			className="link-overlay"
			href={props.link}
			rel="bookmark" 
			title={props.title}
		></a>
		<img 
			src="http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-200x150.jpg" 
			className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
			alt="" 
			srcSet="http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-200x150.jpg 200w, 
							http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-300x225.jpg 300w, 
							http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-252x189.jpg 252w" 
			sizes="(max-width: 200px) 100vw, 200px" 
			width="200" 
			height="150" 
		/>
		<h2>{props.title}</h2>
		<div className="basic-info-wrap">
			<div className="post-details-wrap">
				<span>před měsícem</span>
			</div>
			{props.excerpt + "..."} 
		</div>
	</article>
)

export default SingleArticle