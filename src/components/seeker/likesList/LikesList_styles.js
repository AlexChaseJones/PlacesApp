import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	card: {
		flex: 1,
		justifyContent: 'flex-end',
		height: 215,
		marginBottom: 5,
		position: 'relative'
	},
	cardImage: {
		width: width,
		height: 215,
		resizeMode: 'cover',
		position: 'absolute',
		top: 0,
		left: 0
	},
	cardInfo: {
		flex: 1,
		maxHeight: 110
	},
	cardPrice: {
		fontSize: 23,
		color: 'white',
		width: 100,
		textAlign: 'center',
		fontWeight: '300',
		padding: 5,
		backgroundColor: 'rgba(0,0,0,.7)'
	},
	cardSubInfo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
		backgroundColor: 'rgba(0,0,0,.7)',
	},
	cardAddress: {
		height: 80,
		justifyContent: 'space-around',
		padding: 15
	},
	addressStreet: {
		color: 'white',
		fontSize: 20,
		fontWeight: '300'

	},
	addressCity: {
		color: 'white',
		fontSize: 20,
		fontWeight: '300'
	},
	profileImage: {
		width: 70,
		height: 70,
		borderRadius: 35,
		borderLeftWidth: 1,
		borderColor: 'white'
	}
};