import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';

import { ChatList } from '../../../../components/shared';

class AllChats extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Matches',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../../../../assets/images/tab_bar_convo_icon.png')}
				resizeMode="contain"
				style={{ width: "100%", zIndex: -1 }}
			/>
		),
		headerLeft: <Button title="drawer" onPress={() => navigation.navigate('DrawerOpen')} />,
		headerRight: <Button title="Edit" onPress={() => navigation.navigate('chatSettings')} />
	})

	constructor(props) {
		super(props);
		this.state = {
			rooms: [],
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ChatList navigation={this.props.navigation} {...this.props} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

const mapStateToProps = ({ listerProfile, seekerProfile }) => {
	if (Object.keys(listerProfile.user).length === 0 &&
			listerProfile.user.constructor === Object) {
		return { user: seekerProfile.user, targets: ['Seekers', 'Listers'] };
	} else if (Object.keys(seekerProfile.user).length === 0 &&
			seekerProfile.user.constructor === Object) {
		return { user: listerProfile.user, targets: ['Listers', 'Seekers'] };
	}
};

export default connect(mapStateToProps)(AllChats);
