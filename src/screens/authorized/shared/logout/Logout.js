import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

class Logout extends Component {
	componentDidMount() {
		firebase.auth().signOut();
	}
	render() {
		return (
			<View />
		);
	}
}

export default Logout;
