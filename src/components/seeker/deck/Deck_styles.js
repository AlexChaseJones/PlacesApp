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
		flex: 1
	},
	cardContainer: {
		flex: 1,
		overflow: 'hidden',
		margin: 10,
		borderRadius: 5,
		borderColor: 'rgba(0,0,0,.5)',
		borderWidth: 0.3,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'rgba(0,0,0,.5)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		position: 'relative',
		shadowRadius: 2
	},
	cardImageContainer: {
		flex: 1,
		width: '100%',
		height: 200
	},
	cardImage: {
		flex: 1, 
		height: undefined,
		width: undefined,
		resizeMode: 'contain'
	},
	cardImageBackground: {
		position: 'absolute',
		resizeMode: 'cover',
		blurRadius: 20,
		top: 0,
		left: 0,
		zIndex: -1,
		width: '100%',
		height: '100%'
	},
	price: {
		backgroundColor: 'black',
		color: 'white',
		fontSize: 30,
		padding: 3,
		paddingLeft: 25,
		paddingRight: 25,
		position: 'relative',
		top: -15
	},
	headerText: {
		fontSize: 23,
		fontWeight: '500',
		alignSelf: 'center'
	},
	body: {
		marginTop: -10
	},
	address: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'rgba(0,0,0,0)',
		marginTop: 10
	},
	addressText: {
		fontSize: 18
	},
	listerInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginLeft: 25,
		marginRight: 25,
		marginBottom: 15
	},
	postedBy: {
		textAlign: 'right',
		fontSize: 16,
		fontWeight: '600',
		marginRight: 10
	},
	profileImage: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	nameAndAge: {
		fontSize: 17
	},
	buttonsContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: 15
	},
	bigBtn: {
		width: 90,
		height: 90,
		borderRadius: 50,
		borderColor: 'rgba(0,0,0,.5)',
		borderWidth: 0.3,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'rgba(0,0,0,.5)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2
	},
	littleBtn: {
		width: 55,
		height: 55,
		borderRadius: 18,
		borderColor: 'rgba(0,0,0,.5)',
		borderWidth: 0.3,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'rgba(0,0,0,.5)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2
	},
	infoBtnText: {
		fontSize: 30,
		fontWeight: '700',
		color: '#2387C6'
	}
};
