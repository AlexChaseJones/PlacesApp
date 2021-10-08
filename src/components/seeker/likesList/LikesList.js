import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import styles from './LikesList_styles';

class LikesList extends Component {
	componentWillMount() {
		// if (this.props.user.likedPosts.length !== this.props.) {}
		this.props.getLikedListings(this.props.user.likedPosts);	
	}

	handleViewListing = lister => {
		// Action that sets current like listing
		this.props.setCurrentLister('likes', lister);
		// redirect to viewing a listing
		this.props.navigation.navigate('likedPost', lister);
	}

	formatAddress = address => {
		const {
			apartment,
			street
		} = address;

		return `${street} ${apartment}`;
		}

	keyExtractor = ({ item }) => Math.random()

	renderItem = ({ item }) => {
		return (
			<TouchableWithoutFeedback
				onPress={() => this.handleViewListing(item)}
			>
				<View
					style={styles.card}
				>
					<Image
						style={styles.cardImage}
						source={{ uri: item.listing.images[1] }}
					/>
					<View style={styles.cardInfo}>
						<Text style={styles.cardPrice}>${item.listing.price}</Text>
						<View style={styles.cardSubInfo}>
							<View style={styles.cardAddress}>
								<Text style={styles.addressStreet}>{this.formatAddress(item.listing.address)}</Text>
								<Text style={styles.addressCity}>{item.listing.address.city}, {item.listing.address.state}</Text>
							</View>
							<Image
								style={styles.profileImage}
								source={{ uri: item.profile.thumbnailPhoto }}
							/>
						</View>
					</View>
					{// <Button
					// 	onPress={() => this.handleViewListing(item)}
					// 	title="View Profile"
					// />
					}
				</View>
			</TouchableWithoutFeedback>
		);
	}

	render() {
		return (
			<FlatList
				style={styles.container}
				data={this.props.likedListings}
				extraData={this.state}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
			/>
		);
	}
}

const mapStateToProps = ({ seekerProfile }) => (
  seekerProfile
);

export default connect(mapStateToProps, actions)(LikesList);
