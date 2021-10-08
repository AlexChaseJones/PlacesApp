import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './Header_styles.js';

class Header extends Component {
	renderHeader = screen => {
		// Because this component is mounted inside of the static navigationOptions variable,
		// we don't have access to the redux state, only the navigation state. And because
		// we can't pass params when using a DrawerNavigator, we have built our own header so
		// that it can have information from the redux state. Since this component is reused by
		// several screens, we need a switch statement to return back the correct title.
		switch (screen) {
			case 'profile': {
				return this.props.user.profile.firstName;
			}
			case 'mapView': {
				return 'Find A Space';
			}
			case 'viewPosting':
			case 'likedPost': {
				return this.props.navigation.state.params.listing.address.street;
			}
			case 'likes': {
				return 'Your Likes';
			}
			case 'reviewPostings': {
				return 'Area Review';
			}
			default: {
				return 'error?';
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerButton}>
					{this.props.children.headerLeft}
				</View>
				<Text style={styles.headerText} >{this.renderHeader(this.props.navigation.state.routeName)}</Text>
				<View style={styles.headerButton}>
					{this.props.children.headerRight}
				</View>
			</View>
		);
	}
}


// TODO: Refactor the shit out of this mess. Same code is also living in Chat screen.
const mapStateToProps = ({ listerProfile, seekerProfile }) => {
	if (Object.keys(listerProfile.user).length === 0 &&
			listerProfile.user.constructor === Object) {
		return { user: seekerProfile.user };
	} else if (Object.keys(seekerProfile.user).length === 0 &&
			seekerProfile.user.constructor === Object) {
		return { user: listerProfile.user };
	}
};

export default connect(mapStateToProps)(Header);
