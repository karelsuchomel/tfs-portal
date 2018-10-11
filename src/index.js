import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { browserHistory } from 'react-router-dom';

import './index.sass';
import routes from './routes';

ReactDOM.render(
	routes,
	window.document.getElementById('root')
);