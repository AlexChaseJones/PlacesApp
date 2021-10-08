import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { Header } from '../../../../components/shared';
import { Deck } from '../../../../components/seeker';

class ReviewPostings extends Component {
		static navigationOptions = ({ navigation }) => ({
		tabBarVisible: false,
		header: headerProps => (
			<Header headerProps={headerProps} navigation={navigation}>
				{{
					headerLeft: (
						<TouchableOpacity
							onPress={() => navigation.goBack()}
						>
							<Image 
								source={require('../../../../assets/images/back_icon.png')}
								style={{ width: 22, height: 22, marginLeft: 15 }}
							/>
						</TouchableOpacity>
					),
					headerRight: (
						<TouchableOpacity
							style={{ alignItems: 'flex-end' }}
							// onPress={() => navigation.navigate('editProfile')}
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
				<Deck navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	}
};

export default ReviewPostings;
