import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { Profile as ProfileComponent } from '../../../../components/lister';

class Profile extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Profile',
		headerLeft: <Button title="drawer" onPress={() => navigation.navigate('DrawerOpen')} />,
		headerRight: <Button title="Edit" onPress={() => navigation.navigate('editProfile')} />
	})

	render() {
		return (
			<View style={styles.container}>
				<ProfileComponent />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	}
};

export default Profile;
