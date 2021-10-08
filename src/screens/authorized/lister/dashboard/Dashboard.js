import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { Dashboard as DashboardComponent } from '../../../../components/lister';

class Dashboard extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Dashboard',
		headerLeft: <Button title="drawer" onPress={() => navigation.navigate('DrawerOpen')} />
	})
	render() {
		return (
			<View style={styles.container}>
				<DashboardComponent />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

export default Dashboard;
