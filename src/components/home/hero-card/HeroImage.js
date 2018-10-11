import React from 'react';

import Noon360wPng from './hero-card-images/school-noon-360w.png';
import Noon720wPng from './hero-card-images/school-noon-720w.png';
import Noon960wPng from './hero-card-images/school-noon-960w.png';
import Noon1920wPng from './hero-card-images/school-noon-1920w.png';

export default class HeroImage extends React.Component {
	render() {
		return(
			<picture>
				<source 
					media="(min-width: 571px)"
					srcSet={ Noon960wPng + " 960w, " + Noon1920wPng + " 1920w"}
					sizes="960px"
				/>
				<source
					media="(max-width: 570px)"
					srcSet={ Noon360wPng + " 360w, " + Noon720wPng + " 720w"}
				/>
				<img 
					className="image-container" 
					src={ Noon960wPng }
					alt="Fill from admin"
				/>
			</picture>
		);
	}
}