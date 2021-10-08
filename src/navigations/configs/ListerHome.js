import { TabNavigator } from 'react-navigation';

/**
 *	Navigators
 */
import ListerHome_Dashboard from './ListerHome_Dashboard';
import ListerHome_Likes from './ListerHome_Likes';
import Chat from './Chat';

const ListerHome = TabNavigator({
	dashboard: { screen: ListerHome_Dashboard },
	likes: { screen: ListerHome_Likes },
	chat: { screen: Chat }
}, {
	tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
	},
  tabBarPosition: 'bottom',
  lazy: true,
	headerMode: 'float',
	navigationOptions: {
		drawerLabel: 'Home'
	}
});

export default ListerHome;
