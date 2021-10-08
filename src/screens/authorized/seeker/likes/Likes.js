import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Header } from '../../../../components/shared';
import { LikesList } from '../../../../components/seeker';

class Likes extends Component {
	static navigationOptions = ({ navigation }) => ({
		drawerLabel: 'Home',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../../../../assets/images/tab_bar_heart_icon.png')}
				resizeMode="contain"
				style={{ width: "100%", zIndex: -1 }}
			/>
		),
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
					)
				}}
			</Header>
		)
	})

	render() {
		return (
			<View style={styles.container}>
				<LikesList navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

export default Likes;
