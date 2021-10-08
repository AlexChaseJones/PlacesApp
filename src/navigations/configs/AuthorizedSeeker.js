import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

/**
 *	Navigators
 */
import SeekerHome from './SeekerHome';
import SeekerProfile from './SeekerProfile';

/**
 *	Screens
 */
import {
	AppSettings,
	Logout,
} from '../../screens/authorized/shared';

/**
 *	Components
 */
import { DrawerContent } from '../../components/shared';

const AuthorizedSeeker = DrawerNavigator({
	Home: { screen: SeekerHome },
	Profile: { screen: SeekerProfile },
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
	drawerWidth: 230,
	contentComponent: (props) => <DrawerContent {...props} />,
	contentOptions: {
		activeTintColor: '#2387C6',
		style: {
			width: 230
		},
		labelStyle: {
			paddingLeft: 20,
			fontWeight: '500',
			fontSize: 20
		}
	}
});

export default AuthorizedSeeker;
