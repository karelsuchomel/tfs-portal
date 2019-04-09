import React from 'react';

import magnifierIcon from '../../images/magnifier-icon.svg';
import WPSettings from 'WPSettings'

export default class Search extends React.Component {
	render() {
		const buildURL = WPSettings.themeURL + "/build";
		return(
			<div id="searchform" className="search-container">
				<div className="mobile-centering-wrapper clear-both">
					<label id="show-search-toggle" htmlFor="search-box-toggle"></label>
					<input name="s" id="search-field" placeholder="Hledat" type="text" />
					<button type="submit" id="searchsubmit">
						<img src={ buildURL + magnifierIcon } alt="Clear field" />
					</button>
				</div>
			</div>
		);
	}
}