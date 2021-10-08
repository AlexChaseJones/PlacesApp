import {
  SET_LISTER_PROFILE,
  SET_CURRENT_SEEKER,
  SET_CURRENT_SEEKER_SUCCESS,
  SET_CURRENT_SEEKER_FAIL,
  GET_LIKER_PROFILES,
  GET_LIKER_PROFILES_SUCCESS,
  GET_LIKER_PROFILES_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  currentSeeker: undefined,
  currentSeekerError: null,
  currentSeekerLoading: false,
  likerProfilesError: null,
  likerProfilesLoading: false,
  likerProfiles: [],
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LISTER_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    case SET_CURRENT_SEEKER:
      return {
        ...state,
        currentSeekerLoading: true,
        currentSeekerError: null,
      };
    case SET_CURRENT_SEEKER_SUCCESS:
      return {
        ...state,
        currentSeeker: action.payload,
        currentSeekerLoading: false,
      };
    case SET_CURRENT_SEEKER_FAIL:
      return {
        ...state,
        currentSeeker: undefined,
        currentSeekerError: action.payload,
        currentSeekerLoading: false,
      };
    case GET_LIKER_PROFILES:
      return {
        ...state,
        likerProfilesError: null,
        likerProfilesLoading: true,
      };
    case GET_LIKER_PROFILES_SUCCESS:
      return {
        ...state,
        likerProfiles: action.payload,
        likerProfilesLoading: true,
      };
    case GET_LIKER_PROFILES_FAIL:
      return {
        ...state,
        likerProfilesLoading: false,
        likerProfilesError: action.payload
      };
    default:
      return state;
  }
};
