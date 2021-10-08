import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SignUpFlow extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					Login Flow yo
				</Text>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

export default SignUpFlow;
