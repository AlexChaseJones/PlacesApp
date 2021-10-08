import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { MapFilters } from '../../../../components/seeker';

class FilterSettings extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Filters',
		headerLeft: <Button title="Discard Changes" onPress={() => navigation.goBack()} />
	})

	render() {
		return (
			<View style={styles.container}>
				<MapFilters navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
};

export default FilterSettings;
