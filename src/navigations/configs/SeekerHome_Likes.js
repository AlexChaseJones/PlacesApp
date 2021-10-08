import { StackNavigator } from 'react-navigation';

/**
 *	Screens
 */
import {
	Likes,
	LikedPost
} from '../../screens/authorized/seeker';

const SeekerHome_Likes = StackNavigator({
	likes: { screen: Likes },
	likedPost: { screen: LikedPost }
});

export default SeekerHome_Likes;
