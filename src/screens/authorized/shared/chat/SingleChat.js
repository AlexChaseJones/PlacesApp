import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ChatRoom } from '../../../../components/shared';

class SingleChat extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.firstName
	})
	render() {
		return (
			<View style={styles.container}>
				<ChatRoom navigation={this.props.navigation} {...this.props} />
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

export default connect(mapStateToProps)(SingleChat);
