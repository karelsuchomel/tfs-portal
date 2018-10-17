import FoxhoundSettings from 'FoxhoundSettings'

const path = FoxhoundSettings.URL.path || '/';
export const themeURL = FoxhoundSettings.themeURL;

let blogURL, frontPageRoute;
if ( FoxhoundSettings.frontPage.page ) {
  blogURL = path + 'page/' + FoxhoundSettings.frontPage.blog + '/';
  // const FrontPageComponent = props => (
  //   <SinglePage slug={ FoxhoundSettings.frontPage.page } { ...props } />
  // );
  // frontPageRoute = <Route path={ path } component={ FrontPageComponent } />; // eslint-disable-line react/jsx-no-bind
} else {
  blogURL = path;
  frontPageRoute = null;
}

export default blogURL;