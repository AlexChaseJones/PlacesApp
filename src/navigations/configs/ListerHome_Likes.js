import { StackNavigator } from 'react-navigation';

/**
 *	Screens
 */
import {
	Likers,
	LikersProfile
} from '../../screens/authorized/lister';

const ListerHome_Likes = StackNavigator({
  likers: {
    screen: Likers
  },
  likersProfile: {
    screen: LikersProfile
  }
});

export default ListerHome_Likes;
