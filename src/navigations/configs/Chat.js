import { StackNavigator } from 'react-navigation';

/**
 *	Screens
 */
import {
	AllChats,
	SingleChat,
	ChatSettings
} from '../../screens/authorized/shared';

const Chat = StackNavigator({
  chatList: { screen: AllChats },
  conversation: { screen: SingleChat },
  chatSettings: { screen: ChatSettings }
});

export default Chat;
