import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { Deck } from '../../../../components/lister';

class Likers extends Component {
		static navigationOptions = ({ navigation }) => ({
		title: 'Likes',
		headerLeft: <Button title="drawer" onPress={() => navigation.navigate('DrawerOpen')} />
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
	},
};

export default Likers;
