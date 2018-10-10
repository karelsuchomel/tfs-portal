import React from 'react';

import ClearFieldIcon from './clear-field.svg';

export default class Search extends React.Component {
	render() {
		return(
			<div id="searchform" className="search-container">
				<div className="mobile-centering-wrapper clear-both">
					<div className="search-field-wrapper">
						<input name="s" id="search-field" placeholder="Hledat" type="text" />
						<label id="hide-search-toggle" htmlFor="search-box-toggle">
						<img src={ ClearFieldIcon } alt="Clear field" />
						</label>
					</div>
				<label id="show-search-toggle" htmlFor="search-box-toggle"></label>
				<button type="submit" id="searchsubmit">Hledat</button>
				</div>
			</div>
		);
	}
}