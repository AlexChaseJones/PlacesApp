import React, { Component } from 'react';
import {
	View,
	Animated,
	PanResponder,
	Dimensions,
	LayoutAnimation,
	UIManager
} from 'react-native';

const SCREEN_WIDTH = 	Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.33 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class DeckCards extends Component {
	static defaultProps = {
		onSwipeRight: () => {},
		onSwipeLeft: () => {},
		renderNoMoreCards: () => {}
	}

	constructor(props) {
		super(props);

		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: gesture.dx, y: gesture.dy });
			},
			onPanResponderRelease: (event, gesture) => {
				if (gesture.dx > SWIPE_THRESHOLD) {
					this.forceSwipe('right');
				} else if (gesture.dx < -SWIPE_THRESHOLD) {
					this.forceSwipe('left');
				} else {
					this.resetPosition();
				}
			}
		});

		this.state = { panResponder, position, index: 0 };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.forceSwipe !== this.props.forceSwipe && nextProps.forceSwipe !== null) {
			this.forceSwipe(nextProps.forceSwipe)
		} else if (nextProps.data !== this.props.data) {
			this.setState({ index: 0 });
		}
	}

	componentWillUpdate() {
		UIManager.setLayoutAnimationEnabledExperimental && 
		UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}

	onSwipeComplete(direction) {
		const { onSwipeLeft, onSwipeRight, data } = this.props;
		const item = data[this.state.index];

		direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
		this.state.position.setValue({ x: 0, y: 0 });
		this.setState({ index: this.state.index + 1 });
	}

	getCardStyle() {
		const { position } = this.state;
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ['-120deg', '0deg', '120deg']
		});

		return {
			...position.getLayout(),
			transform: [{ rotate }]
		};
	}

	resetPosition() {
		Animated.spring(this.state.position, {
			toValue: { x: 0, y: 0 }
		}).start();
	}

	forceSwipe(direction) {
		const x = direction === 'right' ? SCREEN_WIDTH + 35 : -SCREEN_WIDTH - 35;
		Animated.timing(this.state.position, {
			toValue: { x, y: 0 },
			duration: SWIPE_OUT_DURATION
		}).start(() => {
			setTimeout(() => {
				this.onSwipeComplete(direction);
			}, 250);
		});
	}

	renderCards() {
		if (this.state.index >= this.props.data.length) {
			return this.props.renderNoMoreCards();
		}

		return this.props.data.map((item, i) => {
			if (i < this.state.index) return null;

			if (i === this.state.index) {
				return ( 
					<Animated.View
						key={item.uid}
						style={[this.getCardStyle(), styles.cardStyle]}
						{...this.state.panResponder.panHandlers}
					>
						{this.props.renderCard(item)}
					</Animated.View>
				);
			}

			if (this.state.index + 3 > i) {
				return (
					<Animated.View 
						key={item.uid}
						style={[styles.cardStyle, { top: 5 * (i - this.state.index), left: 2 * (i - this.state.index) }]}
					>
						{this.props.renderCard(item)}
					</Animated.View>
				);
			}
		}).reverse();
	}

	render() {
		return (
			<View>
				{this.renderCards()}
			</View>
		);
	}
}

const styles = {
	cardStyle: {
		position: 'absolute',
		width: SCREEN_WIDTH
	}
};

export default DeckCards;
