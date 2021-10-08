import React, { Component } from 'react';
import { Animated, Text, View, Button, TouchableOpacity, Image, Switch } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as actions from '../../../actions';

import customMap from './customMap';
import CustomCallout from './CustomCallout';

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBtnWidth_anim: new Animated.Value(80),
			searchBtnMargin_anim: new Animated.Value(20)
		};
	}
	componentWillMount() {
		if (!Object.keys(this.props.subwayMapData).length) {
			this.props.getSubwayData();
		}
		this.setState({
			displaySubwayMap: this.props.displaySubwayMap
		});
	}
	handleReviewArea = () => {
		this.props.navigation.navigate('reviewPostings');
	}

	subwayMap = show => {
		if (!show) return;

		const mappedStations = [];
		const lineColors = ['#FC0D1B', '#FC0D1B', '#FC0D1B', '#0F7F43', '#0F7F43', '#0F7F43', '#9E107F', '#0F7F43', '#0A24FB', '#0A24FB', '#0A24FB', '#FD8024', '#0A24FB', '#FD8024', '#0A24FB', 'FD8024', '#64BE49', '#7F6011', '#808080', '#FD8024', '#FEBF2D', '#FEBF2D', '#FEBF2D', '#808080', '#FEBF2D', '#7F6011'];
		const subwayData = Object.values(this.props.subwayMapData);

		for (let i = 0; i < subwayData.length; i++) {
			mappedStations[i] = {};
			mappedStations[i].coords = subwayData[i].map(station => (({
			latitude: Number(station.position.longitude),
			longitude: Number(station.position.latitude)
		})));
			mappedStations[i].color = lineColors[i];
		}

		return (mappedStations.map(station => (
			<MapView.Polyline
				key={Math.random()}
				coordinates={station.coords}
				strokeWidth={1}
				strokeColor={station.color}
			/>
		)));
	}

	searchArea = () => {
		this.setState({
			loadingRegion: true,
		});
		this.animateSearchButton(0, 0);

		// Without this setTimeout, the setState function above is interupted by the
		// API call in updateRegion, and causes a lag in the rerendering of this component.
		setTimeout(() => {
			this.props.updateRegion(this.state.region, this.props.mapFilters, () => {
				this.setState({ loadingRegion: false });
			});
		}, 500);
	}

	animateSearchButton = (valOne, valTwo) => {
		Animated.parallel([
			Animated.timing(                 
				this.state.searchBtnWidth_anim, {
					toValue: valOne,
					duration: 200
				}),
			Animated.timing(
				this.state.searchBtnMargin_anim, {
					toValue: valTwo,
					duration: 300
				})
			]).start();
	}

	animateToMarker = coords => {
		const _region = {
			...this.state.region,
			...coords
		};

    this.map.animateToRegion(_region, 200);
  }

	render() {
		return (
			<View style={styles.container}>
				<View 
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: 999,
						display: this.state.loadingRegion ? 'visible' : 'none',
						backgroundColor: 'rgba(255,255,255,.5)'
					}}
				/>
				<MapView
					provider={PROVIDER_GOOGLE}
					customMapStyle={customMap}
					ref={ref => { this.map = ref; }}
					style={styles.map}
					initialRegion={this.props.region}
					loadingEnabled
					onRegionChangeComplete={region => {
						this.animateSearchButton(80, 20);
						this.setState({ region });
					}}
				>
				{this.props.listers.map(lister => (
						<MapView.Marker
							key={lister.uid}
							flat={true}
							coordinate={{
								latitude: lister.listing.latitude,
								longitude: lister.listing.longitude
							}}
							identifier={lister.uid}
							onPress={e => {
								this.animateToMarker({ longitude: lister.listing.longitude, latitude: lister.listing.latitude });
							}}
						>
							<View style={styles.marker}>
								<Image
									source={require('../../../assets/images/map_pin_icon.png')} 
									style={{ width: 80, height: 40 }}
								/>
								<Text style={styles.price}>${lister.listing.price}</Text>
							</View>
							<CustomCallout lister={lister} navigation={this.props.navigation} />
						</MapView.Marker>
					))}
				{this.subwayMap(this.state.displaySubwayMap)}
				</MapView>
				<View style={styles.mapFooterButtons}>
					<TouchableOpacity
						style={styles.reviewButton}
						onPress={this.handleReviewArea}
					>
						<Text style={styles.reviewButtonText}>Review This Area</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.searchArea}
					>
						<Animated.View
							style={{
								width: this.state.searchBtnWidth_anim,
								height: 55,
								borderRadius: 30,
								overflow: 'hidden',
								backgroundColor: '#116d',
								alignItems: 'center',
								justifyContent: 'center',
								marginBottom: 20,
								marginRight: 20,
								marginLeft: this.state.searchBtnMargin_anim
							}}
						>
						<Image
							source={require('../../../assets/images/map_search_icon.png')} 
							style={{ width: 25, height: 25 }}
						/>
						</Animated.View>
					</TouchableOpacity>
				</View>
				{
				//<Text>Show Subway</Text>
				//<Switch
				// 	onValueChange={() => this.setState({ displaySubwayMap: !this.state.displaySubwayMap })}
				// 	value={this.state.displaySubwayMap}
				///>
				}
			</View>
		);
	}
}


const styles = {
	container: {
		flex: 1
	},
	map: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0
	},
	marker: {
		flexDirection: 'column',
		zIndex: 2,
		alignSelf: 'center',
	},
	price: {
		flex: 1,
		alignSelf: 'center',
		flexDirection: 'row',
		color: 'white',
		position: 'relative',
		fontSize: 17,
		top: -33.5
	},
	reviewButton: {
		flex: 3,
		height: 50,
		backgroundColor: '#116d',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		overflow: 'hidden',
		marginLeft: 20
	},
	reviewButtonText: {
		height: 50,
		position: 'relative',
		top: 14,
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	},
	searchButton: {
		width: 60,
		height: 60,
		borderRadius: 30,
		overflow: 'hidden',
		backgroundColor: '#116d',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 20,
		marginLeft: 20
	},
	mapFooterButtons: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		bottom: 2
	}
};

const mapStateToProps = ({ mapSearch }) => (
	mapSearch
);

export default connect(mapStateToProps, actions)(Map);
