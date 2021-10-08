import {
  LIKE_LISTING,
  LIKE_LISTING_SUCCESS,
  LIKE_LISTING_FAIL,
  GET_LIKED_LISTINGS,
  GET_LIKED_LISTINGS_SUCCESS,
  GET_LIKED_LISTINGS_ERROR,
  SET_SEEKER_PROFILE,
  UPDATE_SEEKER_PROFILE,
  UPDATE_SEEKER_PROFILE_SUCCESS,
  UPDATE_SEEKER_PROFILE_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  likeLoading: false,
  likeError: undefined,
  likedListings: [],
  likedListingsLoading: false,
  likedListingsError: undefined,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIKE_LISTING: 
      return {
        ...state,
        likeLoading: true,
        likeError: undefined,
      };
    case LIKE_LISTING_SUCCESS:
      return {
        ...state,
        likedListings: state.likedListings.concat(action.payload),
        likeLoading: false,
        likeError: undefined,
      };
    case LIKE_LISTING_FAIL:
      return {
        ...state,
        likeLoading: false,
        likeError: action.payload,
      };
    case GET_LIKED_LISTINGS:
      return {
        ...state,
        likedListingsError: undefined,
        likedListingsLoading: true,
      };
    case GET_LIKED_LISTINGS_SUCCESS:
      return {
        ...state,
        likedListings: action.payload,
        likedListingsLoading: false,
        likedListingsError: false,
      };
    case GET_LIKED_LISTINGS_ERROR:
      return {
        ...state,
        likedListingsLoading: false,
        likedListingsError: action.payload,
      };
    case SET_SEEKER_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_SEEKER_PROFILE:
      return {
        ...state,
        updateProfileLoading: true,
      };
    case UPDATE_SEEKER_PROFILE_SUCCESS:
      return {
        ...state,
        user: { 
          ...state.user,
          profile: action.payload
        },
        updateProfileLoading: false,
      };
    case UPDATE_SEEKER_PROFILE_FAIL:
      return {
        ...state,
        updateProfileLoading: false,
        profileError: action.payload
      };
    default:
      return state;
  }
};
