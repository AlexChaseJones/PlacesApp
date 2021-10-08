import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

/**
 *	Navigators
 */
import ListerHome from './ListerHome';
import ListerProfile from './ListerProfile';

/**
 *	Screens
 */
import {
	AppSettings,
	Logout
} from '../../screens/authorized/shared';

/**
 *	Components
 */
import { DrawerContent } from '../../components/shared';

const AuthorizedLister = DrawerNavigator({
	Home: {
		screen: ListerHome
	},
	Listing: { 
		screen: ListerProfile
	},
	Settings: {
		screen: StackNavigator({
      settings: {
        screen: AppSettings
			}
    })
	},
	Logout: {
		screen: Logout
	}
}, {
	initialRouteName: 'Home',
	drawerWidth: 200,
	contentComponent: (props) => <DrawerContent {...props} />
});

export default AuthorizedLister;
