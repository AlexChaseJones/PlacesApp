import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { SingleSeeker } from '../../../../components/lister';

class LikersProfile extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.profile.firstName,
		headerLeft: <Button title="back" onPress={() => navigation.goBack()} />
	})

	render() {
		return (
			<View style={styles.container}>
				<SingleSeeker />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

export default LikersProfile;
