import TFSWordpressSettings from 'TFSWordpressSettings'
import SiteSettings from 'SiteSettings'

const path = TFSWordpressSettings.URL.path || '/'
const themeURL = TFSWordpressSettings.themeURL

let blogURL, frontPageRoute
if ( TFSWordpressSettings.frontPage.page ) {
  blogURL = path + 'page/' + TFSWordpressSettings.frontPage.blog + '/'
  // const FrontPageComponent = props => (
  //   <SinglePage slug={ FoxhoundSettings.frontPage.page } { ...props } />
  // );
  // frontPageRoute = <Route path={ path } component={ FrontPageComponent } />; // eslint-disable-line react/jsx-no-bind
} else {
  blogURL = path
  frontPageRoute = null
}

const WPSettings = { blogURL: SiteSettings.endpoint, themeURL: themeURL}
export default WPSettings