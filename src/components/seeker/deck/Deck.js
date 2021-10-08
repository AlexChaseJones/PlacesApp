import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import DeckCards from './DeckCards';

import styles from './Deck_styles';

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forceSwipe: null,
			currentListerIndex: 0
		};
	}

	getBadge(profile) {
		if (true) {
			return (
				<View style={{ alignItems: 'center' }}>
					<Image 
						source={require('../../../assets/images/verified_icon.png')}
						style={{ width: 26, height: 26 }}
					/>
					<Text
						style={{ fontWeight: '300', fontSize: 16, marginTop: 3 }}
					>Verified</Text>
				</View>
			);
		}
	}

	handleViewListing = () => {
		const lister = this.props.listers[this.state.currentListerIndex];
		// Action that sets current like listing
		this.props.setCurrentLister('map', lister);
		// redirect to viewing a listing
		this.props.navigation.navigate('viewPosting', lister);
	}

	renderCard(lister) {
		return (
			<View
				style={styles.cardContainer}
			>
				<View style={styles.cardImageContainer}>
					<Image
						style={styles.cardImageBackground}
						source={{ uri: lister.listing.images[4] }}
						resizeMode={'cover'}
						blurRadius={25}
					/>
					<Image
						style={styles.cardImage}
						source={{ uri: lister.listing.images[4] }}
					/>
				</View>
				<Text style={styles.price}>${lister.listing.price}</Text>
				<View style={styles.body}>
					<View>
						<Text style={styles.headerText}>One Bedroom</Text>
						<Text style={styles.headerText}>Available Now</Text>
					</View>
					<View style={styles.address}>
						<Text style={styles.addressText}>2250 Metropolitan Ave #A</Text>
						<Text style={styles.addressText}>Brooklyn, NY</Text>
					</View>
					<View style={styles.lineBreak} />
					<View style={styles.listerInfo}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={styles.postedBy}>Posted{'\n'} By</Text>
							<Image
								source={{ uri: lister.profile.thumbnailPhoto }}
								style={styles.profileImage}
							/>
						</View>
						<View>
							<Text style={styles.nameAndAge}>{lister.profile.firstName} {lister.profile.lastName}{'\n'}{lister.profile.age}</Text>
						</View>
						{this.getBadge(lister.profile)}
					</View>
				</View>
			</View>
		);
	}

	onSwipeLeft = () => {
		const newIndex = this.state.currentListerIndex + 1;
		this.setState({
			currentListerIndex: newIndex,
			forceSwipe: null
		});
	}

	onSwipeRight = () => {
		const newIndex = this.state.currentListerIndex + 1;
		this.setState({
			currentListerIndex: newIndex,
			forceSwipe: null
		});
	}

	renderNoMoreCards() {
		return (
			<View title="All Done">
				<Text style={{ marginBottom: 10 }}>
					There's no more content here!
				</Text>
				<Button
					backgroundColor="#03A0F4"
					title="Get more!"
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<DeckCards
					forceSwipe={this.state.forceSwipe}
					data={this.props.listers}
					renderCard={this.renderCard}
					renderNoMoreCards={this.renderNoMoreCards}
					getBadge={this.getBadge}
					onSwipeLeft={this.onSwipeLeft}
					onSwipeRight={this.onSwipeRight}
				/>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						style={styles.bigBtn}
						onPress={() => this.setState({ forceSwipe: 'left' })}
					>
						<Image
						  style={{width: 50, height: 50}}
						  source={require('../../../assets/images/dislike_heart_icon.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.littleBtn}
						onPress={() => this.handleViewListing(this.state.currentListerIndex)}
					>
						<Text style={styles.infoBtnText}>i</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.bigBtn}
						onPress={() => this.setState({ forceSwipe: 'right' })}
					>
						<Image
						  style={{width: 50, height: 50}}
						  source={require('../../../assets/images/like_heart_icon.png')}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ mapSearch, seekerProfile }) => ({
	...mapSearch,
	...seekerProfile
});

export default connect(mapStateToProps, actions)(Deck);
