import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class SingleSeeker extends Component {
	handleLike = () => {
		this.props.registerRoom(this.props.user, this.props.currentSeeker);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>You are viewing the profile of:</Text>
				<Text>{this.props.currentSeeker.profile.firstName}
				{ this.props.currentSeeker.profile.lastName}</Text>
				<Text>Click below to 'like' and start a new conversation...</Text>
				<Button
					title="Like"
					onPress={() => this.handleLike()}
				/>
			</View>
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

export default connect(mapStateToProps, actions)(SingleSeeker);
