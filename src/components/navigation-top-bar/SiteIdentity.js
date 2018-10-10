import React from 'react';

import SiteLogo from './logo-light.svg'

export default class SiteIdentity extends React.Component {
	render() {
		return(
			<a id="logo-wrapper" href="#">
				<img src={ SiteLogo } alt="logo - oficiální název základní školy" />
			</a>
		);
	}
}