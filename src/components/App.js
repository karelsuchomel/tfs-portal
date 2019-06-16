import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import Header from './header/Header.js'
import NavigationSideBar from './navigation-side-bar/NavigationSideBar.js'
import Home from './home/Home.js'
import Single from './post/Single.js'

const App = ({match}) => (
	<div className="css-variables theme-mod-light-variables">
		<Header />
		{ false && <NavigationSideBar /> }

		<Switch>
			<Route exact path={match.url} render={() => 
				<Home 
				/>
			} />
			<Route path={match.url + '/single'} component={Single} />
		</Switch>
	</div>
)

export default App