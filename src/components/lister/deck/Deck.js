import React, { Component } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Deck extends Component {
	componentWillMount() {
		this.props.getLikerProfiles(this.props.user.listing.likesToReview);
	}

	handleViewProfile = (uid, user) => {
		//TODO: Switch this around so that setCurrentSeeker is called
		//in componentWillMount of likersProfile screen.
		//also remove the (uid, user) shit. real repetitive.
		this.props.setCurrentSeeker(uid, () => {
			this.props.navigation.navigate('likersProfile', user);			
		});
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Text>there are {this.props.user.listing.likes} people who like your listing!</Text>
				<Text>
					there are/is {Object.keys(this.props.user.listing.likesToReview).length} 
					likes/like that needs a review!
					</Text>
				{Object.values(this.props.likerProfiles).map(liker => (
					<View
						key={liker.uid}
						style={styles.card}
					>
						<Text>{liker.profile.firstName} {liker.profile.lastName}</Text>
						<Text>{liker.profile.gender}</Text>
						<Text>{liker.profile.occupation} at {liker.profile.company} </Text>
						<Button
							title="View Listing"
							onPress={() => this.handleViewProfile(liker.uid, liker)}
						/>
					</View>
				))}
			</ScrollView>
		);
	}
}


const styles = {
	container: {
		flex: 1,
	},
	card: {
		height: 90,
		alignItems: 'center',
		marginBottom: 20,
	},
};

const mapStateToProps = ({ listerProfile }) => (
  listerProfile
);

export default connect(mapStateToProps, actions)(Deck);
