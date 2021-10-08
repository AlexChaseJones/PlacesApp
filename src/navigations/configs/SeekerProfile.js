import { StackNavigator } from 'react-navigation';

/**
 *	Screens
 */
import {
	Profile,
	EditProfile
} from '../../screens/authorized/seeker';

const SeekerProfile = StackNavigator({
	profile: {
		screen: Profile
	},
  editProfile: {
		screen: EditProfile
  }
});

export default SeekerProfile;
