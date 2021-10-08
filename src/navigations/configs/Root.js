import { StackNavigator } from 'react-navigation';

/**
 *	Navigators
 */
// import { Likers } from '../../screens/authorized/lister';
import AuthorizedSeeker from './AuthorizedSeeker';
import AuthorizedLister from './AuthorizedLister';
import unAuthorized from './unAuthorized';


const Root = StackNavigator({
  unAuthorized: { screen: unAuthorized },
  authorizedSeeker: { screen: AuthorizedSeeker },
  authorizedLister: { screen: AuthorizedLister }
}, {
	headerMode: 'none',
	initialRouteName: 'authorizedSeeker',
});

export default Root;
