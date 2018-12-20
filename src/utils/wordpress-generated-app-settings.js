import TFSWordpressSettings from 'TFSWordpressSettings'
import SiteSettings from 'SiteSettings'

const path = TFSWordpressSettings.URL.path || '/'
const themeURL = TFSWordpressSettings.themeURL

let portalPath, frontPageRoute
if ( TFSWordpressSettings.frontPage.page ) {
  portalPath = path + 'page/' + TFSWordpressSettings.frontPage.blog + '/'
  // const FrontPageComponent = props => (
  //   <SinglePage slug={ FoxhoundSettings.frontPage.page } { ...props } />
  // );
  // frontPageRoute = <Route path={ path } component={ FrontPageComponent } />; // eslint-disable-line react/jsx-no-bind
} else {
  portalPath = path
  frontPageRoute = null
}

const WPSettings = { portalPath: portalPath, portalBase: TFSWordpressSettings.URL.base ,themeURL: themeURL}
export default WPSettings