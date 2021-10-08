import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Header } from '../../../../components/shared';
import { Profile as ProfileComponent } from '../../../../components/seeker';

class Profile extends Component {
	static navigationOptions = ({ navigation }) => ({
		drawerLabel: 'Profile',
		header: headerProps => (
			<Header headerProps={headerProps} navigation={navigation}>
				{{
					headerLeft: (
						<TouchableOpacity
							onPress={() => navigation.navigate('DrawerOpen')}
						>
							<Image 
								source={require('../../../../assets/images/menu_icon.png')}
								style={{ width: 22, height: 22, marginLeft: 15 }}
							/>
						</TouchableOpacity>
					),
					headerRight: (
						<TouchableOpacity
							style={{ alignItems: 'flex-end' }}
							onPress={() => navigation.navigate('editProfile')}
						>
							<Image 
								source={require('../../../../assets/images/options_icon.png')}
								style={{ width: 22, height: 22, marginRight: 15 }}
							/>
						</TouchableOpacity>
					)
				}}
			</Header>
		)
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
