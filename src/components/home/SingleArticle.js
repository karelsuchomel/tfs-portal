import React from 'react'
import { Link } from 'react-router-dom'

const SingleArticle = (props) => (
	<article className='post-wrap clear-both'>
		<a 
			className='link-overlay'
			href={props.link}
			rel='bookmark' 
			title={props.title}
		></a>
		{ props.featuredImageURL ?
			<img 
				src={ props.featuredImageURL } 
				className='attachment-post-thumbnail size-post-thumbnail wp-post-image' 
				alt='' 
				sizes='(max-width: 200px) 100vw, 200px' 
				width='200' 
				height='150' 
			/>
			:
			''
		}
		<h2>{props.title}</h2>
		<div className='basic-info-wrap'>
			<div className='post-details-wrap'>
				<span>před měsícem</span>
			</div>
			{props.excerpt + '...'} 
		</div>
	</article>
)

export default SingleArticle