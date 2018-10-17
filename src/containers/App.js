import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'

import NavigationTopBar from '../components/navigation-top-bar/NavigationTopBar.js'
import NavigationSideBar from '../components/navigation-side-bar/NavigationSideBar.js'
import Home from '../components/home/Home.js'
import Single from '../components/post/Single.js'
import blogURL from '../utils/wordpress-generated-app-settings'

class App extends Component {
	static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

	render() {
		const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props

		return(
			<div className="app-wrapper">

				<input name="toggle-menu" id="toggle-menu-checkbox" type="checkbox" />
				<NavigationTopBar />

				<div id="content-wrap" className="clear-both">

					<div id="side-panel-bg-fix"></div>
					<NavigationSideBar />
					<div id="side-list-fixed-background-mobile"></div>
					<div id="dimmer-content"></div>

					{!isFetching &&
            <button onClick={this.handleRefreshClick}>
              Refresh
            </button>
          }

					<Switch>
						<Route exact path={blogURL} >
							<Home
								posts={posts} 
								isFetching={isFetching}
							/>
						</Route>
						<Route path={ `${blogURL}/single` } component={ Single } />
					</Switch>
					
				</div>

			</div>
		);
	}
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)