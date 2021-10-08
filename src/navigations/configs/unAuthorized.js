import { StackNavigator } from 'react-navigation';

/**
 *	Screens
 */
import {
	LoginFlow,
	SignUpFlow
} from '../../screens/unAuthorized';

const unAuthorized = StackNavigator({
  login: { screen: LoginFlow },
  signUp: { screen: SignUpFlow }
});

export default unAuthorized;
