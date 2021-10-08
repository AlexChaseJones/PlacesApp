import React, { Component } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Profile extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<Text>This is your listing!</Text>
				<Text>
					Your name is {this.props.user.profile.firstName} {this.props.user.profile.lastName}
				</Text>
			</ScrollView>
		);
	}
}


const styles = {
	container: {
		flex: 1
	},
};

const mapStateToProps = ({ listerProfile }) => (
  listerProfile
);

export default connect(mapStateToProps, actions)(Profile);
