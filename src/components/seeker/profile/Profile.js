import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import styles from './Profile_styles.js';

class Profile extends Component {
	generateLookingFor(i) {
		const images = {
			bedroom: require('../../../assets/images/lf_bedroom_icon.png'),
			budget: require('../../../assets/images/lf_budget_icon.png'),
			moveDate: require('../../../assets/images/lf_moveDate_icon.png'),
		};

		return (
			<View key={i.type} style={styles.lookingForItem}>
					<Image style={{ width: 50, height: 50 }} source={images[i.type]} />
					<Text style={styles.lookingForText}>
						{i.text}
					</Text>
			</View>
		);
	}

	generateAmenities(i) {
		const images = {
			deposit: require('../../../assets/images/am_deposit_icon.png'),
			heating: require('../../../assets/images/am_heating_icon.png'),
			internet: require('../../../assets/images/am_internet_icon.png'),
			laundry: require('../../../assets/images/am_laundry_icon.png'),
			renovated: require('../../../assets/images/am_renovated_icon.png'),
		};

		return (
			<View key={i.type} style={styles.amenityItem}>
					<Image style={{ width: 30, height: 30 }} source={images[i.type]} />
					<Text style={styles.amenityText}>
						{i.text}
					</Text>
			</View>
		)
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.profileContainer}>
					<View style={styles.profileHeader}>
						<Image
							source={{ uri: this.props.user.profile.thumbnailPhoto }}
							style={styles.headerImage}
						/>
						<Text style={styles.headerText}>
							{this.props.user.profile.firstName} {this.props.user.profile.lastName}{'\n'}
							<Text style={{ fontStyle: 'italic', fontSize: 20 }}>{this.props.user.profile.age}, {this.props.user.profile.gender}</Text>
						</Text>
					</View>
					<View style={styles.profileBody}>
						<Text style={styles.profileJob}>{this.props.user.profile.occupation} at {this.props.user.profile.company}</Text>
						<View style={styles.lineBreak} />
						<View style={styles.profileSummary}>
							<Text style={styles.header}>SUMMARY</Text>
							<Text style={styles.summaryText}>{this.props.user.profile.summary}</Text>
						</View>
						<View style={styles.lineBreak} />
						<Text style={styles.header}>LOOKING FOR</Text>
						<View style={styles.profileLookingFor}>
							{this.props.user.profile.lookingFor.map(i => this.generateLookingFor(i))}
						</View>
						<View style={styles.lineBreak} />
						<Text style={styles.header}>MOST PREFERED AMENITIES</Text>
						<View style={styles.profileAmenities}>
							{this.props.user.profile.amenities.map(i => this.generateAmenities(i))}
						</View>
						<View style={styles.lineBreak} />
					</View>
				</View>
			</ScrollView>
		);
	}
}


const mapStateToProps = ({ seekerProfile }) => (
  seekerProfile
);

export default connect(mapStateToProps, actions)(Profile);
