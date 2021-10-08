import React from 'react';
import { Image } from 'react-native';

import { TabNavigator } from 'react-navigation';

/**
 *	Navigators
 */
import SeekerHome_Search from './SeekerHome_Search';
import SeekerHome_Likes from './SeekerHome_Likes';
import Chat from './Chat';

const SeekerHome = TabNavigator({
	home: { screen: SeekerHome_Search },
	likes: { screen: SeekerHome_Likes },
	chat: { screen: Chat }
}, {
	tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#116aaa',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: '#C6DEEF',
    showLabel: false,
    style: {
      height: 45,
      overflow: 'hidden',
      borderTopWidth: 1,
      zIndex: 999,
      borderTopColor: 'rgba(0,0,0,1)' 
    }
	},
  tabBarPosition: 'bottom',
  lazy: true
});

export default SeekerHome;
