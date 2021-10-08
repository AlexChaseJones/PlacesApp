import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { EditProfile as EditProfileComponent } from '../../../../components/seeker';

class EditProfile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<EditProfileComponent navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	}
};

export default EditProfile;
