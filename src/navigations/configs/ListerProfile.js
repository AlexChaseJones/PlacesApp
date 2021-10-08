import { StackNavigator } from 'react-navigation';
/**
 *	Screens
 */
import {
	Profile,
	EditProfile
} from '../../screens/authorized/lister';

const ListerProfile = StackNavigator({
	profile: {
		screen: Profile
	},
  editProfile: {
    screen: EditProfile
  }
});

export default ListerProfile;
