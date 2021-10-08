import axios from 'axios';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import {
	listingsByPosUrl,
	getLikerProfilesUrl,
	getLikedListingsUrl,
	likeListingUrl,
	getSubwayDataUrl,
} from '../config';

import {
	UPDATE_MAP_LISTINGS,
	UPDATE_MAP_LISTINGS_SUCCESS,
	UPDATE_MAP_LISTINGS_FAIL,
	GET_SUBWAY_DATA,
	GET_SUBWAY_DATA_SUCCESS,
	GET_SUBWAY_DATA_FAIL,
	SET_CURRENT_MAP_LISTER,
	SET_CURRENT_LIKE_LISTER,
	LIKE_LISTING,
	LIKE_LISTING_SUCCESS,
	LIKE_LISTING_FAIL,
	GET_LIKED_LISTINGS,
	GET_LIKED_LISTINGS_SUCCESS,
	GET_LIKED_LISTINGS_ERROR,
	SET_MAP_FILTER,
	UPDATE_SEEKER_PROFILE,
	UPDATE_SEEKER_PROFILE_SUCCESS,
	UPDATE_SEEKER_PROFILE_FAIL,
	//Lister Actions
	SET_CURRENT_SEEKER,
	SET_CURRENT_SEEKER_SUCCESS,
	SET_CURRENT_SEEKER_FAIL,
	GET_LIKER_PROFILES,
	GET_LIKER_PROFILES_SUCCESS,
	GET_LIKER_PROFILES_FAIL,
} from './types';

export * from './chatActions';

export const updateRegion = (region, filters, cb) => async dispatch => {
	dispatch({
		type: UPDATE_MAP_LISTINGS,
		payload: region,
	});

	try {
		const { data } = await axios.post(listingsByPosUrl, { ...region, ...filters });

		dispatch({
			type: UPDATE_MAP_LISTINGS_SUCCESS,
			payload: data
		});
		cb();
	} catch (err) {
		dispatch({
			type: UPDATE_MAP_LISTINGS_FAIL,
			payload: err
		});
	}
};

export const getSubwayData = () => async dispatch => {
	dispatch({
		type: GET_SUBWAY_DATA
	});

	try {
		const { data } = await axios.post(getSubwayDataUrl);

		dispatch({
			type: GET_SUBWAY_DATA_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: GET_SUBWAY_DATA_FAIL,
			payload: err,
		});
	}
};

export const setCurrentLister = (view, lister) => {
	let type;
	switch (view) {
		case 'map': 	type = SET_CURRENT_MAP_LISTER; break;
		case 'likes': 	type = SET_CURRENT_LIKE_LISTER; break;
		default: 			type = SET_CURRENT_MAP_LISTER;
	}

	return ({
		type,
		payload: lister
	});
};

export const dislikeListing = listing => async dispatch => {
	//dispatch some shit to update the users profile and then update the redux store.
	//Need to make sure shit stays in sync
};

export const likeListing = (lister, cb) => async dispatch => {
	dispatch({ type: LIKE_LISTING });

	const userId = firebase.auth().currentUser.uid;
	const { uid } = lister;

	try {
		let { data } = await axios.post(likeListingUrl, { userId, uid });
		dispatch({
			type: LIKE_LISTING_SUCCESS,
			payload: {
				...lister,
				...data
			}
		});

		cb();
	} catch (error) {
		dispatch({
			type: LIKE_LISTING_FAIL,
			payload: error
		});
	}
};

export const getLikedListings = likedPosts => async dispatch => {
	dispatch({ type: GET_LIKED_LISTINGS });

	try {
		let { data } = await axios.post(getLikedListingsUrl, { likedPosts });
		dispatch({
			type: GET_LIKED_LISTINGS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: GET_LIKED_LISTINGS_ERROR,
			payload: error
		});
	}
};

export const setMapFilter = settings => ({
	type: SET_MAP_FILTER,
	payload: settings
});

export const updateProfile = profile => async dispatch => {
	dispatch({ type: UPDATE_SEEKER_PROFILE });

	const userId = firebase.auth().currentUser.uid;
	try {
		await firebase.database().ref(`/Seekers/${userId}/profile`).set(profile);
		dispatch({
			type: UPDATE_SEEKER_PROFILE_SUCCESS,
			payload: profile,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_SEEKER_PROFILE_FAIL,
			payload: error,
		});
	}
};

// Lister actions // Seperate Later... please

export const setCurrentSeeker = (likerId, cb) => async dispatch => {
	dispatch({ type: SET_CURRENT_SEEKER });
	try {
		let snapshot = await firebase.database().ref(`/Seekers/${likerId}`).once('value');
		const profile = snapshot.val();
		dispatch({
			type: SET_CURRENT_SEEKER_SUCCESS,
			payload: profile,
		});
		cb();
	} catch (error) {
		dispatch({
			type: SET_CURRENT_SEEKER_FAIL,
			payload: error,
		});
	}
};

export const getLikerProfiles = likesToReview => async dispatch => {
	dispatch({ type: GET_LIKER_PROFILES });

	try {
		let { data } = await axios.post(getLikerProfilesUrl, { likesToReview });

		dispatch({
			type: GET_LIKER_PROFILES_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: GET_LIKER_PROFILES_FAIL,
			payload: err
		});
	}
};
