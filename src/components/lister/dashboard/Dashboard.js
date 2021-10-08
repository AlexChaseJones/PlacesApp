import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Dashboard extends Component {
	logProps = () => {
		console.log('dashboard props: ', this.props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Dashboard is loaded</Text>
				<Button
					title="log props"
					onPress={this.logProps}
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

export default connect(mapStateToProps, actions)(Dashboard);
