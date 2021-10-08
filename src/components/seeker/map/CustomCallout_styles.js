import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
	customView: {

	},
  calloutContainer: {
    backgroundColor: '#2387C6',
    borderWidth: 3,
    borderColor: '#2387C6',
    width: width * 0.9,
    height: 185,
    overflow: 'hidden'
  },
  calloutImage: {
  	position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: width * 0.9,
    height: 185
  },
  calloutImageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -2,
    width: width * 0.9,
    height: 185
  },
  postedTime: {
  	color: 'white',
  	backgroundColor: 'rgba(0,0,0,.6)',
  	maxHeight: 30,
  	fontSize: 19,
  	fontWeight: '400',
  	padding: 5,
  	textAlign: 'center'
  },
  profileImageContainer: {
  	padding: 3,
  	alignItems: 'center',
  	justifyContent: 'center',
  	margin: 2,
  	borderRadius: 100,
  	backgroundColor: 'rgba(0,0,0,.7)'
  },
  profileImage: {
  	width: 66,
  	height: 66,
  	padding: 6,
  	borderRadius: 33,
  }
}