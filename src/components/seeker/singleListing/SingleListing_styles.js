import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
		lineBreak: {
		borderTopWidth: 0.2,
		borderColor: 'black',
		minHeight: 1,
		marginTop: 15,
		marginBottom: 15,
		margin: 20
	},
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    height: 250,
    position: 'relative'
  },
  listingImage: {
    width,
    height: 250
  },
  listingImageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width,
    height: 250
  },
  priceTag: {
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    alignSelf: 'center',
    paddingTop: 5,
    position: 'relative',
    top: -18,
    paddingBottom: 5,
    padding: 15,
    fontSize: 25,
    zIndex: 600
  },
  sectionOne: {
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  sectionOneBlock: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	marginTop: 10,
  	alignItems: 'flex-end'
  },
	sectionOneText: {
		fontSize: 20
	},
	header: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 0,
		fontWeight: '600'
	},
	sectionTwo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 25,
		marginRight: 25,
		alignItems: 'center'
	},
	sectionTwoText: {
		fontSize: 22,
		fontWeight: '300',
		marginLeft: 10
	},
	amenityItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		marginTop: 10,
	},
	amenityText: {
		marginLeft: 20,
		fontSize: 20,
		fontStyle: 'italic'
	},
	footerBtnsContainer: {
		flex: 1,
		height: 90,
		overflow: 'hidden',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	footerSection: {
		flex: 1,
		flexDirection: 'row',
		height: 120

	},
	footerBtn: {
		flex: 1,
		shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 30,
    backgroundColor: '#2387C6',
		margin: 17,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	likeBtn: {
		width: 90,
		height: 90,
		borderRadius: 50,
		borderColor: 'rgba(0,0,0,.5)',
		borderWidth: 0.3,
		backgroundColor: 'white',
		position: 'absolute',
		bottom: 20,
		right: 20,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
	}
};
