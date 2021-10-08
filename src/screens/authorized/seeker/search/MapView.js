import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { Header } from '../../../../components/shared';
import { Map } from '../../../../components/seeker';

class MapView extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Search',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../../../../assets/images/tab_bar_search_icon.png')}
				resizeMode="contain"
				style={{width: "100%", zIndex: -1}}
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
		// headerRight: <Button title="Filter" onPress={() => navigation.navigate('filterSettings')} />

	render() {
		return (
			<View style={styles.container}>
				<Map navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	}
};

export default MapView;
